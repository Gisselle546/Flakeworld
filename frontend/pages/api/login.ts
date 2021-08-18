import cookie from 'cookie'
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body.token

    const strapiRes = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/local`, {
      identifier:email,
     password
    })

    

    if (strapiRes.data) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', strapiRes.data.jwt, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      )

      res.status(200).json({ user: strapiRes.data })
    } else {
      res
        .status(strapiRes.data.statusCode)
        .json({ message: strapiRes.data.message[0].messages[0].message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}