import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t shadow-lg p-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          <Link href="/">Vercel Clone</Link>
        </h2>
        <address>
          <h2>Nagpur, Maharashtra, India</h2>
          <p>441110, Wanadongri Nagpur.</p>
        </address>
      </div>
    </footer>
  );
}
