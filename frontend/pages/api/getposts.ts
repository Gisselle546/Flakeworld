import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const resd = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`)
  const jsonData = resd.data
  res.status(200).json(jsonData)
}
  
  
 