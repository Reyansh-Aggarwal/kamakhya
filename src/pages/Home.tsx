import { AboutUs } from "../components/AboutUs";
import { Background } from "../components/Background";
import { Cursor } from "../components/Cursor";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";


export const Home = () => {
    return (
        <div className="min-h-dvh min-w-dvw overflow-x-hidden cursor-none">
           
            {/* Cursor */}   
            <Cursor />
            {/* Background */}
            <Background />

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* AboutUs */}
            <AboutUs />
        </div>
    );
};