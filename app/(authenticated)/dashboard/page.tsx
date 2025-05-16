import { auth } from "@/auth";
import ReposContainer from "@/components/dashboard/repos-container";
import React from "react";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div className="">
      <h2>Dashboard page</h2>
      {/* <pre>{JSON.stringify(user?.username ?? "test")}</pre> */}
      <ReposContainer />
    </div>
  );
}
