import { useEffect, useRef} from 'react';
//import bgImage from "../assets/bg-image.png"; not used
import bgImageGray from "../assets/bg-image-gray.png";
export const Background = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        cursorRef.current!.style.left = `${e.clientX}px`;
        cursorRef.current!.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
    <div className="bg-[#ffff] min-h-fit h-full w-full inset-0 z-0 fixed">
      <div className = "bg-[#dedede] rounded-br-full blur-md flex top-0 left-0 lg:animate-enter-bg animate-enter-bg-portrait fixed z-0"
      style = {{}}/>
        
        <div
            className="pointer-events-none absolute w-30 h-30 bg-[#fe477c] blur-xl"
            ref = {cursorRef}
            style = {{transform: "translate(-50%, -50%)"}}
        />
        <img src = {bgImageGray} className="select-none absolute h-auto w-dvw"/>
    </div>);
};