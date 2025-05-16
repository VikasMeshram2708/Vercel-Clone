import { SignInBtn } from "@/components/auth-btns/btns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="max-w-lg mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-center text-lg sm:text-xl md:text-2xl font-semibold">
            Login Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInBtn cn="w-full h-14 rounded-lg text-lg" />
        </CardContent>
      </Card>
    </div>
  );
}
