import { Card, IconCard, ImageCard } from "@/components/card";

export default function Home() {
  return (
  <div className="flex justify-center w-full">
    <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 basis-4/5">
      <h1 className="text-3xl md:text-4xl">What have I been up too?</h1>
      <a>Here are some projects I have been working recently...</a>

      <div className="flex flex-col gap-2 w-full max-w-xl items-center">

      </div>
    </div>
  </div>
  );
}
