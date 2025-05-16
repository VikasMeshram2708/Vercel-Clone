import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { auth } from "@/auth";
import { LogoutBtn } from "./auth-btns/btns";
import { dropdownNavLinks, navLinks } from "@/data";
import { Avatar, AvatarImage } from "./ui/avatar";

export default async function Navbar() {
  const session = await auth();

  if (!session?.user) {
    return (
      <nav className="border-b shadow-lg p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            <Link href="/">Vercel Clone</Link>
          </h2>
          <ul className="flex items-center gap-4">
            {navLinks?.map((elem, idx) => (
              <li key={idx}>
                <Link href={elem?.href}>{elem?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav className="border-b shadow-lg p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          <Link href="/">Vercel Clone</Link>
        </h2>
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    session?.user?.name || "User"
                  )}&background=0d623b&color=ffffff`}
                  alt={session?.user?.name || "User Avatar"}
                />
              </Avatar>
              {/* <p className="cursor-pointer">
                Welcome back, {session?.user?.name ?? "U"}
              </p> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {dropdownNavLinks?.map((elem, idx) => (
                <DropdownMenuItem key={idx}>
                  <Link href={elem?.href}>{elem?.title}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
