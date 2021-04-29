import localData from '../../../localData.json'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method not allowed')
  }

  const { path, ...params } = req.query;

  const [ref, id] = Array.from(path);

  const items = localData[ref]

  if (id) {
    const item = items.find((item: any) => item.id === id);

    return res.status(200).json(item)
  }

  const filteredItems = items.filter((item: any) => {
    for (const [param, value] of Object.entries(params)) {
      if (item[param] !== value) return false
    }
    return true
  })

  return res.status(200).json(filteredItems)
}
