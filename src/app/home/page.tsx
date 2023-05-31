import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Feed from "@/components/home/feed";
import Sidebar from "@/components/layout/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Sidebar name={session?.user?.name!} image={session.user?.image!} />
      <Feed />
    </>
  );
}
