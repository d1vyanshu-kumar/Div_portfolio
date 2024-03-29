'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
    <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="About">
            
        </MenuItem>
        </Link>
        <Link href="#projects-section">
        <MenuItem setActive={setActive} active={active} item="Projects">
            
        </MenuItem>
        </Link>
        <Link href="#Talks">
        <MenuItem setActive={setActive} active={active} item="Talks">
            
        </MenuItem>
        </Link>
        <Link href={"#use"}>
        <MenuItem setActive={setActive} active={active} item="Uses">
            
        </MenuItem>
        </Link>
        
        <Link href={"#contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://github.com/d1vyanshu-kumar">Github</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/divyanshu-kumar-24026b296/">Linkedin</HoveredLink>
            <HoveredLink href="https://www.instagram.com/divyanshu_k.__nayak__/">Instagram</HoveredLink>
            <HoveredLink href="mailto:kumardivyanshu118@gmail.com">Email</HoveredLink>
        </div>
        </MenuItem>
        </Link>
        
    </Menu>
    </div>
  )
}

export default Navbar