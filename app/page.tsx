import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Hero/>
      </div>

      <div>
      </div>
    </main>
  );
}
