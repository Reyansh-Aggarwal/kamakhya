import {MyButton} from "./MyButton";
export const HeroSection = () => {
    
    return (
        <div id = "hero" className="relative min-h-screen flex flex-col space-y-16 items-center justify-center  animate-fade-in duration-600 ">
            <div className=" container mx-auto z-10 text-center">
                <div className="text-6xl md:text-6xl lg:text-8xl font-medium tracking-tightest">
                    Break the stigma, <br></br>
                    one conversation at a time.
                </div>
            </div>
            <div className = "flex flex-row space-x-18">
                <MyButton name = "Join Us" toLocation="joinPage"/>
                <MyButton name = "Collaborate" toLocation="joinPage"/>
            </div>
        </div>
    );
};