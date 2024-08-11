"use client";

import React, { useEffect } from "react";
import { motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { Computer } from "./computer-art";

import { cn } from "@/lib/utils";

export default function Hero() {

  return(
    <>
      <TypingAnimation/>
      <Computer/>
    </>
  );
}

function TypingAnimation() {
  const count = useMotionValue(0);
  const text = "whoami";
  const displayText = useTransform(count, (value) => "$ " + text.slice(0, Math.round(value)));

  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate([
      [count, text.length, { duration: 1, delay: 1.5, ease: "easeInOut" }],
      [".cursor", { opacity: [1, 0] }, { duration: 0, at: "+1" }],
      [".username", { opacity: [0, 1], y: [10, 0] }, { duration: 1 }]
    ]);
  }, [])
  
  return(
    <div ref={scope}>
      <motion.span>
        {displayText}
      </motion.span>

      <motion.span className="cursor">
        <Cursor />
      </motion.span>

      <div className="username">
        SemicolonUnexpected
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <motion.div
      className="inline-block bg-red-700 h-9 w-4 translate-x-1 translate-y-[0.35rem]"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }}
    />
  );
}
