import { Button } from "~/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router";

export const Navbar = () => {
    return (
        <section className="bg-background sticky top-0 z-50 flex w-full border-b h-(--header-height)">
            <div className="container mx-auto">
                <nav className="h-full flex items-center justify-between">
                    <Link 
                        to="/"
                        className="flex items-center gap-2"
                    >
                        <img
                            src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                            className="max-h-8"
                            alt="Shadcn UI Navbar"
                        />
                        <span className="text-lg font-semibold tracking-tighter">
                            Lune
                        </span>
                    </Link>
                    <div className="hidden lg:flex flex-1 justify-center px-8">
                        <div className="relative w-full max-w-sm">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search Products"
                                className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="hidden items-center gap-4 lg:flex">
                        <Link to="/login">
                            <Button variant="outline" className="cursor-pointer">Sign in</Button>
                        </Link>
                        <Link to="/register">
                            <Button className="cursor-pointer">Sign Up</Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </section>
    );
};
