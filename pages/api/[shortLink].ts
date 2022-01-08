import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.shortLink === "facebook") res.status(302).redirect("https://facebook.com")
}
