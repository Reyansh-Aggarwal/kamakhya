import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

type ButtonProps = {
    name: string;
    toLocation: string;
}
export function MyButton(props: ButtonProps) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(props.toLocation);
    }

    return (
            <button 
            className={cn(
            "rounded-[32px]",
            "shadow-[0_6px_9.3px_0_rgba(0,0,0,0.38)]",
            "bg-gradient-to-br from-[#FFC8D6] to-[#F09BAB]"
            )} 
            onClick = {handleClick}>
                <div className={cn(
                    "w-[173px] h-[61px] m-[0.25rem] self-center",
                    "bg-gradient-to-br from-[#FF6F93] via-[#FD3675] to-[#FF3657]",
                    "rounded-[28px] flex items-center justify-center",
                    "shadow-[inset_0_-4px_11.1px_9px_rgba(255,255,255,0.24)]"
                    )} >
                    <div className="text-white text-2xl tracking-tighter font-light">
                        {props.name}
                    </div>
                </div>
            </button>
    );
}