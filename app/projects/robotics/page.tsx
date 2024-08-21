import Image from "next/image";
import React from "react";

export default function Robotics() {
  return(
    <div className="flex justify-center w-full pt-8">
      <div className="flex flex-col gap-8 basis-4/5 max-w-screen-md justify-center items-center">
        <h1 className="text-xl md:text-3xl text-center font-bold">FTC Centerstage</h1>
        <Image src="/ftc-centerstage.png" alt="FTC Centerstage Logo" sizes="100vw" width="0" height="0" className="w-96 rounded-md"/>
        <p className="text-justify">
          Recently I had the good fortune to compete in the <a href="https://www.firstinspires.org/robotics/ftc" className="text-red-500 hover:underline">First Tech Challenge</a> nationals at Cambridge University after winning the Inspire Award at Northern Ireland regionals. This was an amazing experience, and allowed me to put my STEM skills to the test. Our team put in a huge amount of effort over the course of the whole year, and this was evident as we managed to finish as Division 1 finalists.
        </p>
      </div>
    </div>
  );
}
