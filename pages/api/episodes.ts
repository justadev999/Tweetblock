import { NextApiResponse, NextApiRequest } from 'next';
import data from './data.json'

export default function(req: NextApiRequest, res: NextApiResponse ) => {
  res.send(data)
}