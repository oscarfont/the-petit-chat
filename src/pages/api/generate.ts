// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ChatMessageResponse from "@/lib/dtos/classes/ChatMessageResponse";
import { generateCompletions } from "@/lib/usecases";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatMessageResponse | string>
) {
  try {
    if (req.method !== "POST")
      throw Error("This is a POST endpoint. Please try again");
    const message = req.body?.message;
    const response = await generateCompletions(message);
    return res.status(200).json(response);
  } catch (e: any) {
    res.status(500).json(`Oops, something went wrong. Reason: ${e?.message}`);
  }
}
