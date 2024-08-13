import * as React from "react";

import { IconSvgProps } from "@/types";
import { motion } from "framer-motion";

type MenuBurgerProps = IconSvgProps & { isOpen: boolean }

export const MenuBurger: React.FC<MenuBurgerProps> = ({
  size = 24,
  width,
  height,
  color="white",
  isOpen = false,
  ...props
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <motion.path d="M4 6L20 6" stroke={color} strokeWidth="2" strokeLinecap="round"
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
      />
      <motion.path d="M4 12L20 12" stroke={color} strokeWidth="2" strokeLinecap="round"
        animate={{ 
          scale: isOpen ? 0 : 1,
        }}
      />
      <motion.path d="M4 18L20 18" stroke={color} strokeWidth="2" strokeLinecap="round"
        animate={{
          rotate: isOpen ? -45 : 0,
        }}
      />
    </svg>
  );
};
