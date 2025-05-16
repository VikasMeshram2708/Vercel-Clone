import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Session } from "next-auth";

export default function Hero({ session }: { session: Session }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/50 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Deploy <span className="text-primary">Next.js</span> and{" "}
          <span className="text-primary">React</span> apps — in seconds.
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl">
          Effortless deployments, edge-optimized infrastructure, and zero-config
          CI/CD. Build, preview, and ship your React & Next.js projects with
          ease.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {session?.user ? (
            <Link href="/dashboard">
              <Button size="lg">
                Continue To Dashboard
                <ArrowRight />
              </Button>
            </Link>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link href="/dashboard">
                <Button size="lg">Get Started for Free</Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
