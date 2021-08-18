import cookie from 'cookie'
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PUT') {


      if (!req.headers.cookie) {
        res.status(403).json({ message: 'Not Authorized' })

        return 
      }


        
        const{likes,retweet,id}=req.body.datar;


        const  tokenCookie  = cookie.parse(req.headers.cookie) || null;
        const token =tokenCookie['token']
        

        const strapiRes = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/`+id, {
            likes,
            retweet,
            
          },{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          
          console.log(strapiRes)

          if (strapiRes.data) {
            res.status(200).json({ post: strapiRes.data })
          } else {
            res
            .status(strapiRes.data.statusCode)
          }
        } else {
          res.setHeader('Allow', ['PUT'])
          res.status(405).json({ message: `Method ${req.method} not allowed` })
        }
      

}