import axios from "axios";
import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next';


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        
      console.log(req.body)

        const{ name,bio, location, website,avatar,banner}=req.body.datar;

        
        if (!req.headers.cookie) {
            res.status(403).json({ message: 'Not Authorized' })
    
            return 
          }

          const { token } = cookie.parse(req.headers.cookie) || null;
          
        
        const updatedUser = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/profiles/me`,{
            

            bio,
            name,
            location,
            website,
            avatar,
            banner 
            
        },
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        
        
        
        )

       
      
        if (updatedUser.data) {
          
      
            res.status(200).json({ profiles: updatedUser.data!})
          } 
          else {
            res.status(403).json({ message: 'User forbidden' })
          }
        } else {
          res.setHeader('Allow', ['POST'])
          res.status(405).json({ message: `Method ${req.method} not allowed` })
        } 
      
    }

