import cookie from 'cookie'
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    if (!req.headers.cookie) {
        res.status(403).json({ message: 'Not Authorized' })

        return 
      }

      const{ description,profile,image}=req.body.datar;

      const  tokenCookie  = cookie.parse(req.headers.cookie) || null;
      const token =tokenCookie['token']
          
      const strapiRes = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
        description,
        image,
        profile,
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (strapiRes.data) {
        res.status(200).json({ post: strapiRes.data })
      } else {
        res
        .status(strapiRes.data.statusCode)
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
  
  
  
}