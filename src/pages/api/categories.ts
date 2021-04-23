import faker from 'faker'
import { NextApiRequest, NextApiResponse } from 'next'

type Category = {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = Array.from(Array(3).keys(), key => {
  const name = faker.lorem.words(2)
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
  const image = `category-${key + 1}.jpg`
  const id = key + 1;

  return {
    id,
    name,
    image
  }
})

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method not allowed')
  }

  if (!req.query.id) return res.status(200).json(categories)

  return res
    .status(200)
    .json(categories.find(
      ({ id }) => id === Number(req.query.id))
    )
}