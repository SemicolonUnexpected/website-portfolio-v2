import * as React from "react";

import { IconSvgProps } from "@/types";

export const MenuBurger: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  color="white",
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
      <path d="M4 18L20 18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12L20 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 6L20 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};
