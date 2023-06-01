import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { tweet, selectedUni, selectedProgram } = body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });

    await prisma.tweet.create({
      data: {
        userId: user!.id,
        text: tweet,
        school: selectedUni.label,
        program: selectedProgram.label,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
