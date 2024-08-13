import Hero from "@/components/hero";
import MouseCord from "@/components/mouse-cord";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-10">
      <div className="z-0">
        <Hero/>
      </div>
      <MouseCord className="z-20"/>

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
  );
}
