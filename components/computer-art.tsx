import * as React from "react";

import { IconSvgProps } from "@/types";

export const Computer: React.FC<IconSvgProps> = ({
  size = 600,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 127.3 116.5"
      {...props}
    >
      <g transform="translate(-38 -45.3)">
        <path fill="none" stroke="#fff" strokeWidth=".3" d="M94 123v-4h28v4"/>
        <rect width="76.8" height="58.8" x="66.6" y="52.2" fill="none" stroke="#fff" rx=".5" ry=".5"/>
        <circle cx="95.5" cy="120.6" r=".7" fill="#fff"/>
        <path fill="none" stroke="#fff" strokeWidth=".3" d="M124.8 123v-4.1h5v4.1"/>
        <circle cx="97.6" cy="120.6" r=".7" fill="#fff"/>
        <rect width="71.5" height="53.9" x="69.2" y="54.9" fill="none" stroke="#fff" strokeWidth=".5" rx="1" ry="1"/>
        <rect width="89.4" height="71.4" x="60.3" y="45.6" fill="none" stroke="#fff" strokeWidth=".5" rx=".3" ry=".3"/>
        <circle cx="99.6" cy="120.6" r=".7" fill="#fff"/>
        <path fill="none" stroke="#fff" strokeWidth=".5" d="M75 117h60l-1 6H76z"/>
        <path fill="none" stroke="#fff" strokeLinecap="round" strokeWidth=".2" d="M127.9 120.2a1 1 0 0 1 .4 1 1 1 0 0 1-1 .8 1 1 0 0 1-1-.7 1 1 0 0 1 .4-1.1m.6.7v-1.2"/>
        <g fill="none" stroke="#fff" strokeLinecap="round">
          <path strokeWidth=".3" d="m91.5 123 .7 2.3H118l.5-2"/>
          <path strokeWidth=".5" d="M124.7 123.2a19.7 3.7 0 0 1-9.9 3.2 19.7 3.7 0 0 1-19.6 0 19.7 3.7 0 0 1-9.9-3.2"/>
          <path strokeWidth=".5" d="M124.7 124.7a19.7 3.7 0 0 1-9.9 3.2 19.7 3.7 0 0 1-19.6 0 19.7 3.7 0 0 1-9.9-3.2m39.4-1.5v1.6m-39.4-1.6v1.6"/>
        </g>
        <g fill="none" stroke="#fff">
          <path d="m130 123 4 7a.2.2 0 0 1-.2.3H76.2a.2.2 0 0 1-.2-.3l2.8-7.1"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="m134 130.3 1 3.5a.2.2 0 0 1-.2.3H75.2a.2.2 0 0 1-.2-.3l1-3.6"/>
        </g>
        <g fill="none" stroke="#fff">
          <path strokeWidth=".5" d="M75.5 121.6H60l-14 15.9a4 4 110.7 0 0-1 2.6v21.5h120v-21.5a4 4 69.3 0 0-1-2.6l-14-15.9h-15.5"/>
          <g strokeLinecap="round" strokeLinejoin="bevel">
            <path strokeWidth=".3" d="M47 136.4h115.9m-118 3.1H165"/>
            <path strokeWidth=".7" d="M53.4 147.8v10.5m2.7-10.5v10.5m2.8-10.5v10.5m2.7-10.5v10.5m2.7-10.5v10.5m2.7-10.5v10.5m2.8-10.5v10.5m2.7-10.5v10.5m2.8-10.5v10.5m2.7-10.5v10.5"/>
            <path strokeWidth="1.5" d="m65.7 132.1-.2-3.4c-.3-3-2-6.9-8.9-9.2-9-3-8.7-15.6-4.3-20 3.9-3.9 7.3-3.6 7.3-3.6"/>
            <path strokeWidth="1.5" d="M63 132.1s1-8-13.8-11c-12.9-2.6-12.5-13.5-6.1-17.4 5.5-3.3 16.5-3.2 16.5-3.2"/>
          </g>
        </g>
        <rect width=".8" height="1.5" x="59.5" y="99.8" fill="#fff" ry="0"/>
        <rect width=".8" height="1.5" x="59.3" y="95.2" fill="#fff" ry="0"/>
        <rect width="8" height="3.5" x="60.2" y="130.6" fill="none" stroke="#fff" strokeWidth=".2" ry="1.7"/>
        <rect width="33.5" height="4.3" x="105.2" y="149.8" fill="none" stroke="#fff" strokeWidth=".3" ry=".8"/>
        <g fill="#fff">
          <rect width="3.4" height="1.1" x="134.2" y="156.2" ry=".5"/>
          <rect width="3.9" height="1.4" x="127.2" y="145.7" ry=".7"/>
          <rect width="7.7" height="2.6" x="117.9" y="142.3" ry=".7"/>
          <rect width="23.2" height="1.1" x="110.2" y="143" ry=".5"/>
        </g>
      </g>
    </svg>
  );
};
