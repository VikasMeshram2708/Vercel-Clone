import { auth } from "@/auth";
import ReposContainer from "@/components/dashboard/repos-container";
import React from "react";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div className="max-w-5xl mx-auto">
      <h2>Dashboard page</h2>
      <pre>{JSON.stringify(session?.user)}</pre>
      <ReposContainer />
    </div>
  );
}
