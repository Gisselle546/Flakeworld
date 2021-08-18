import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';


export default async (req: NextApiRequest, res: NextApiResponse) => {

  
    if (req.method === 'GET') {

      const{ slug}=req.body;
  
    const resd = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/profiles/${slug}`)
    
    
  
      
    if (resd.data) {
      res.status(200).json({ profile: resd.data })
    } else {
      res
      .status(resd.data.statusCode)
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }





    
  
  
  
  }
    