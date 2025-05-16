import { auth } from "@/auth";
import Hero from "@/components/home/hero";

export default async function Home() {
  const session = await auth();
  return (
    <div className="max-w-5xl mx-auto">
      <Hero session={session} />
    </div>
  );
}
