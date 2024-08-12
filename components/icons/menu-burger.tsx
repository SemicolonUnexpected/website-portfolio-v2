import * as React from "react";

import { IconSvgProps } from "@/types";

export const MenuBurger: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  color="white",
  ...props
}) => {
  <svg
    width={size || width}
    height={size || height}
    fill={color}
    viewBox="0 0 17 14"
  >
    <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
  </svg>
}
