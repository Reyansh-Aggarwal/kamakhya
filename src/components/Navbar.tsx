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
        "bg-transparent w-full h-fit fixed inset-0 z-50 transition-all animate-move-up select-none cursor-none"
    )}>
        <div className={cn(
          "container w-fit p-16 lg:px-24 items-center justify-center flex flex-row space-x-6 text-lg lg:text-xl rounded-full transition-all duration-500",
          isScrolled ? "py-0.5 bg-white/25 backdrop-blur-md shadow-md mt-3" : "py-0.5")}>
            <a 
            className="text-primary/70 hover:text-primary"
            href = "">
                Awards  
            </a>
            <a 
            className="text-primary/70 hover:text-primary"
            href = "#hero">
                 <img src = {logo} className="h-14 lg:h-16 w-auto"/>
            </a>
            <a 
            className="text-primary/70 hover:text-primary"
            href = "">
                Events 
            </a>
        </div>
    </nav>);
};
