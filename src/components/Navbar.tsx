import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import logo from "../assets/kamakhya-icon.png";
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
    <nav className={cn(
        "bg-transparent w-full h-fit fixed px-3 inset-0 z-50 transition-all animate-move-up select-none cursor-none",
        isScrolled ? "py-2 bg-white/20 backdrop-blur-md shadow-md" : "py-2"
    )}>
        <div className="container w-full items-center justify-center flex flex-row space-x-6 text-3xl">
            <a 
            className="text-primary/80 hover:text-primary"
            href = "">
                Awards  
            </a>
            <a 
            className="text-primary/80 hover:text-primary"
            href = "#hero">
                 <img src = {logo} className="h-[5rem] w-auto"/>
            </a>
            <a 
            className="text-primary/80 hover:text-primary"
            href = "">
                Events 
            </a>
        </div>
    </nav>);
};
