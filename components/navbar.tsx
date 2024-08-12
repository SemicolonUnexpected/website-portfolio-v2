"use client";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  Logo,
  MenuBurger
} from "@/components/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
      <nav className="bg-black fixed w-full z-90 top-0 start-0 border-b border-white">
        <div className="flex justify-between max-w-screen-md m-auto text-white items-center mx-auto p-4">

          <div className="">
            <Logo className="justify-start"/>
          </div>

          <ul className="hidden sm:flex gap-4 justify-center w-full">
            {siteConfig.navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white hover:text-red-500">{item.label}</a>
              </li>
            ))}
          </ul>

          <div>
            <a className="hidden sm:flex" href={siteConfig.links.github}><GithubIcon size={29}/></a>
            <button type="button" className="flex sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <MenuBurger/>
            </button>
          </div>

        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn("w-full h-screen md:hidden pt-24", menuOpen ? "block" : "hidden")}>
        <ul className="flex flex-col gap-4 items-center">
          {siteConfig.navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white active:text-red-500">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
