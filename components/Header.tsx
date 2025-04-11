import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "@/components/Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 px-8 xl:py-12 xl:px-12 text-white">
            <div className="mx-auto container flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-2xl xl:text-4xl font-semibold">Faizz<span className="text-accent">.</span></h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contacts">
                        <Button className="bg-accent rounded-full text-primary hover:bg-accent/70 cursor-pointer">
                            Hire Me
                        </Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;