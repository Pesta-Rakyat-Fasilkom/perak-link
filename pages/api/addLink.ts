import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

export type Data = {
  message?: string
  data: any
}

type BodyReq = {
  newLink: string
  url: string
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const bodyRequest = req.body as BodyReq
  let response: Data = {
    data: null,
    message: "failed",
  }
  prisma.generatedLink
    .create({
      data: {
        redirectURL: bodyRequest.url,
        link: bodyRequest.newLink,
      },
    })
    .then((e) => {
      response = {
        data: bodyRequest,
        message: "success",
      }
    })
    .catch(() => {})
    .finally(async () => {
      await prisma.$disconnect()
      return res.status(201).send(response)
    })
}
