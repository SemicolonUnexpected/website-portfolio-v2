"use client";

import { IconCard, ImageCard } from "@/components/card";
import { Typescript } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 basis-4/5">
        <h1 className="text-3xl md:text-4xl">What have I been up to?</h1>
        <a>Here are some projects I have been working recently...</a>

        <div className="flex flex-col gap-2 w-full max-w-screen-md items-center">
          <ImageCard 
            href="/projects/robotics" 
            title="Robotics" 
            text="Recently I had the good fortune to compete in the First Tech Challenge nationals at Cambridge University after winning the Inspire Award at Northern Ireland regionals. This was an amazing experience, and allowed me to put my STEM skills to the test. Our team put in a huge amount of effort over the course of the whole year, and this was evident as we managed to finish as Division 1 finalists."
            src="/ftc-centerstage.png"
            width={250}
          />
        </div>
      </div>
    </div>
  );
}
