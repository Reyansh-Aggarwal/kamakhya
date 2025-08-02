import {MyButton} from "./MyButton";
export const HeroSection = () => {
    
    return (
        <div id = "hero" className="relative min-h-screen flex flex-col space-y-16 items-center justify-center duration-600">
            <div className=" container mx-auto z-10 text-center">
                <div className="text-6xl md:text-6xl lg:text-8xl font-medium tracking-tightest ">
                    <p className = "animate-move-up-delay-1 opacity-0">Break the stigma,</p> 
                    <p className = "animate-move-up-delay-3 opacity-0">one conversation at a time.</p>
                </div>
            </div>
            <div className = "flex flex-row gap-10 md:gap-24 lg:gap-32 animate-move-up-delay-2 opacity-0">
                <MyButton name = "Join Us" toLocation="joinPage"/>
                <MyButton name = "Collaborate" toLocation="collabPage"/>
            </div>
        </div>
    );
};