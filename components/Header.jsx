import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "@/components/Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-500">
            <div className="mx-auto p-primary">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Faizz <span className="text-accent">.</span></h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button className="cursor-pointer">
                            Hire Me
                        </Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    );
};

export default Header;