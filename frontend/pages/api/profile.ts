import cookie from 'cookie'
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse, next:any) => {
    if (req.method === 'GET') {
        
        if (!req.headers.cookie) {
            res.status(403).json({ message: 'Not Authorized' })
    
            return 
          }

          
      
          const  tokenCookie  = cookie.parse(req.headers.cookie) || null;
          const token =tokenCookie['token']
          
        
        const strapiRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/profiles/me`, {
       
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
      
          console.log(strapiRes.data)
      
          if (strapiRes.data) {
            res.status(200).json({ profile: strapiRes.data })
          } else {
            next();
          }
        } else {
          res.setHeader('Allow', ['GET'])
          res.status(405).json({ message: `Method ${req.method} not allowed` })
        }
      }