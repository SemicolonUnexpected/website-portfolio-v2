"use client";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  Logo
} from "@/components/icons";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  return(
    <nav className="bg-black fixed w-full z-90 top-0 start-0 border-b border-white">
      <div className="flex max-w-screen-md m-auto text-white items-center justify-center mx-auto p-4">

        <div className="">
          <Logo className="justify-start"/>
        </div>

        <ul className="hidden md:flex gap-4 justify-center w-full">
          {siteConfig.navItems.map((item) => (
            <li>
              <a href={item.href} className="text-white active:text-red-500">{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="justify-end">
          <a href={siteConfig.links.github}><GithubIcon size={29}/></a>
        </div>
      </div>
    </nav>
  );
}
