"use client";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  Logo
} from "@/components/icons";
import { Button } from "./ui/button";

import { useState } from "react";
import { MenuBurger } from "./icons/menu-burger";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  return(
    <nav className="bg-black fixed w-full z-90 top-0 start-0 border-b border-white">
      <div className="flex justify-between max-w-screen-md m-auto text-white items-center mx-auto p-4">

        <div className="">
          <Logo className="justify-start"/>
        </div>

        <ul className="hidden sm:flex gap-4 justify-center w-full">
          {siteConfig.navItems.map((item, index) => (
            <li key={`${item}-${index}`}>
              <a href={item.href} className="text-white active:text-red-500">{item.label}</a>
            </li>
          ))}
        </ul>

        <div>
          <a className="hidden sm:flex" href={siteConfig.links.github}><GithubIcon size={29}/></a>
          <Button size="icon" variant="ghost">
          </Button>
        </div>
      </div>
    </nav>
  );
}
