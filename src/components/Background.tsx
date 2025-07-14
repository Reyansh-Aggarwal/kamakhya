import { useEffect, useRef} from 'react';
import bgImage from "../assets/bg-image.png";

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
    <div className="bg-[#dedede] min-h-fit h-full w-full inset-0 z-0 fixed">
        <div
            className="pointer-events-none absolute w-30 h-30 rounded-full bg-[#fe477c] blur-2xl"
            ref = {cursorRef}
            style = {{transform: "translate(-50%, -50%)"}}
        />
        <img src = {bgImage} className="select-none absolute h-auto w-dvw"/>
    </div>);
};