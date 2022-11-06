import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { initial, inspired } = req.body
    const result = await prisma.user.create({
      data: {
        initial,
        inspired,
      },
    })
    res.status(200).json(result)
  }
  res.status(200)
}
