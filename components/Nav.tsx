"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Experiences",
        path: "/experiences",
    },
    {
        name: "Contacts",
        path: "/contacts",
    }
]

export const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="gap-8 flex">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    );
};