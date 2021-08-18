import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    if (!req.headers.cookie) {
        res.status(403).json({ message: 'Not Authorized' })

        return 
      }

      const{counter,profile,mainid}= req.body.datar;
    
      const  tokenCookie  = cookie.parse(req.headers.cookie) || null;
      const token =tokenCookie['token']

      const strapiRes = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/followers`, {
        counter,
        profile,
        mainid
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (strapiRes.data) {
        res.status(200).json( {followers:strapiRes.data} )
      } else {
        res
        .status(strapiRes.data.statusCode)
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
  




  }
