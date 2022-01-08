import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

type Data = {
  message?: string
  data: any
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const route = req.query.shortLink as string

  const linkQuery = await prisma.generatedLink.findMany({
    where: {
      link: route,
    },
  })

  let redirectUrl = linkQuery[0]?.redirectURL
  if (redirectUrl !== undefined) return res.status(201).redirect(redirectUrl)
  return res.status(201).redirect("https://facebook.com")
}
