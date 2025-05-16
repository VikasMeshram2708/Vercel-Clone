import { LogoutBtn } from "@/components/auth-btns/btns";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <h2>Profile Page</h2>
        <LogoutBtn />
      </div>
    </div>
  );
}
