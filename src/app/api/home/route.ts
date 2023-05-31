import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method !== "GET") {
  //   res.status(405).json({ error: "Method Not Allowed" });
  //   return;
  // }
  // try {
  //   const tweets = await prisma.tweet.findMany();
  //   res.status(200).json(tweets);
  // } catch (error) {
  //   console.error("Error fetching tweets:", error);
  //   res.status(500).json({ error: "Failed to fetch tweets" });
  // }

  res.json({ name: "John Doe" });
}
