import Hero from "@/components/hero";
import { Mouse } from "@/components/mouse-art";
import MouseCord from "@/components/mouse-cord";

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col pt-10 w-[350px] items-center justify-center m-auto">
      <div className="z-20">
        <Hero/>
      </div>

      <MouseCord/>

      <div className="absolute flex flex-col text-center top-[425px] gap-20 w-72
                                                         md:top-[600px] md:gap-32 md:text-lg">
        <a>
          Hi, I&#39;m Matthew, aka SemicolonUnexpected. I am a budding computer scientist who is enthusiastic for mathematics and programming projects
        </a>

        <a>
          I am self taught in C#, python and Typescript. I also have some experience with java in the context of the First Tech Challenge, and also some rust and haskell
        </a>

        <a>
          Linux is my primary OS, and I am very comfortable using it. I also dual boot windows to get the best of both worlds
        </a>
      </div>

      <Mouse className="absolute w-28 top-[1013px] left-[207px] z-0 md:top-[1455px] md:left-[228px]"/>
    </div>
  );
}
