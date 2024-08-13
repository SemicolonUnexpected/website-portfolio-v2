"use client";

import { useEffect } from "react";
import { motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { Computer } from "./computer-art";
import { Logo } from "./icons";

export default function Hero() {
  return(
    <div className="relative">
      <Computer size={360} className=""/>
      <div className="absolute left-[53px] top-[48px] w-[238px] h-[159px] p-2">
        <TypingAnimation/>
        {/*<LogoPopup className="m-auto"/>*/}
      </div>

    </div>
  );
}

const TypingAnimation = () => {
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
      <motion.span className="text-red-500 text-[1.2rem]">
        {displayText}
      </motion.span>

      <motion.span className="cursor">
        <Cursor />
      </motion.span>

      <div className="username text-white text-[1.2rem]">
        SemicolonUnexpected
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <motion.div
      className="inline-block bg-red-700 h-4 w-2 translate-x-1 translate-y-[0.20rem] font-size-[]"
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

const LogoPopup: React.FC<{ className?: string }> = ({ className }) => {
  return(
    <motion.div
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
      duration: 10.5,
      ease: "linear",
      times: [0, 0.5, 1]
      }}
    >
      <Logo color="#ef4444" size={64} className={className}/>
    </motion.div>
  );
}
