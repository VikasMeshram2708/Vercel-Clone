/**
 * This Component fetches the user's GitHub repositories via Kinde userinfo
 */
"use client";

import { Button } from "../ui/button";

export default function ReposContainer() {
  const getInfo = async () => {
    console.log("ok");
  };

  return (
    <div>
      <Button onClick={getInfo}>Get GitHub Info</Button>
    </div>
  );
}
