import Hero from "@/components/hero";
import { Mouse } from "@/components/mouse-art";
import MouseCord from "@/components/mouse-cord";

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col items-center pt-10 w-[360px]">
      <div className="z-20">
        <Hero/>
      </div>

      <MouseCord className="w-[430px] -translate-y-3 z-10"/>

      <div className="absolute top-[445px] flex flex-col gap-40 text-center text-ellipsis overflow-hidden">
        <div>
          Hi, I&#39;m Matthew, aka SemicolonUnexpected. I am a budding computer scientist who is enthusiastic for mathematics and programming projects
        </div>

        <div>
          I am self taught in C#, python and Typescript. I also have some experience with java in the context of the First Tech Challenge, and also some rust and haskell
        </div>

        <div>
          Linux is my primary OS, and I am very comfortable using it. I also dual boot windows to get the best of both worlds
        </div>
      </div>

      <Mouse className="absolute w-28 top-[1138px] left-[221px] z-0"/>
    </div>
  );
}
