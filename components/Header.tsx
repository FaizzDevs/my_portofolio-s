import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "@/components/Nav";

const Header = () => {
    return (
        <header className="py-8 px-8 xl:py-12 xl:px-12 text-white">
            <div className="mx-auto p-primary flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Faizz <span className="text-accent">.</span></h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="bg-gray-800 hover:bg-accent hover:text-gray-800 text-white cursor-pointer">
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