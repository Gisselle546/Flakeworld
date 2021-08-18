import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {

    if (!req.headers.cookie) {
        res.status(403).json({ message: 'Not Authorized' })

        return 
      }

      const  tokenCookie  = cookie.parse(req.headers.cookie) || null;
      const token =tokenCookie['token']



      console.log(req.body)

      

    
      const strapiRes =  await axios({
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/likes/${req.body}`,
        method:'delete',
        headers:{ Authorization: `Bearer ${token}`}
      })

      if (strapiRes.data) {
        res.status(200).json({})
      } else {
        res
        .status(strapiRes.data.statusCode)
      }
    } else {
      res.setHeader('Allow', ['DELETE'])
      res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
  
}