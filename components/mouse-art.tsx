import * as React from "react";

import { IconSvgProps } from "@/types";

export const Mouse: React.FC<IconSvgProps> = ({
  size = 750,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 185.49 97.395"
      {...props}
    >
      <g transform="translate(-20.447 -82.903)">
        <g fill="none" stroke="#fff" stroke-linecap="round" strokeLinejoin="round">
          <path d="m80.283 166.06s87.901-82.628 110.49-68.413c22.587 14.215 11.389 44.259 11.389 44.259s-0.73311 3.6757-19.859 12.29c-18.672 8.4102-91.767 25.102-91.767 25.102z" strokeWidth="2"/>
          <path d="m95.492 91.841s29.245-12.902 61.334 13.201"/>
          <path d="m80.701 166.2-58.484-17.553c-10.129-3.0399 81.678-98.714 166.93-51.856" strokeWidth="2"/>
          <path d="m105.34 104.18c-26.366 13.903-53.264 44.115-56.582 51.956"/>
          <path d="m80.798 165.9s82.125-77.633 107.7-69.21" strokeWidth="2.5"/>
          <path d="m90.372 179.77-67.163-21.279-2.2046-10.828"/>
        </g>
        <path d="m74.039 127.43c-1.2855-1.519-1.5003-3.5877-0.08167-6.0023 1.4186-2.4146 4.1995-4.1074 6.9037-5.003 2.7041-0.89556 7.4923-0.45288 6.489 1.9393-1.8354 1.8621-6.1591 5.658-10.262 8.6721-1.1803 0.83053-3.0495 0.39382-3.0495 0.39382z" fill="#fff" strokeWidth="0"/>
        <ellipse transform="matrix(.94935 .31422 -.32433 .94594 0 0)" cx="98.861" cy="138.14" rx="4.2772" ry="3.1095" fill="#fff" strokeWidth="0"/>
      </g>
    </svg>
  );
};
