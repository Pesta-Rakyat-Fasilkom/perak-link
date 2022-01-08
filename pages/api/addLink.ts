import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

export type Data = {
  message?: string
  data: any
  error?: boolean
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
    error: true,
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
    .catch((e) => {
      response = {
        data: bodyRequest,
        message: "Link pendek yang anda berikan sudah pernah dipakai.",
        error: true,
      }
    })
    .finally(async () => {
      await prisma.$disconnect()

      if (response.error) return res.status(400).send(response)
      else return res.status(200).send(response)
    })
}
