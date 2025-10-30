import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";

interface ButtonsProps {
    onTrailerClick: () => void;
}

export default function Buttons({ onTrailerClick }: ButtonsProps) {
    return (
    <div className="mt-8 flex justify-center space-x-4">
        <button className="flex items-center px-6 py-3 rounded-lg bg-yellow-300 hover:bg-yellow-400 text-black 
        font-medium transition-colors duration-200 border-2 border-black shadow-[3px_3px_0_#000] 
        hover:shadow-[5px_5px_0_#000] active:shadow-[2px_2px_0_#000] transform hover:-translate-y-0.5 active:translate-y-0
        cursor-pointer">
            Get started
        </button>
        <button 
            onClick={onTrailerClick}
            className="flex items-center px-6 py-3 rounded-lg bg-black hover:bg-gray-900 text-white 
            font-medium transition-colors duration-200 border-2 border-black shadow-[3px_3px_0_#000] 
            hover:shadow-[5px_5px_0_#000] active:shadow-[2px_2px_0_#000] transform hover:-translate-y-0.5 active:translate-y-0 
            cursor-pointer"
        >
            View full trailer 
            <MdOutlineOndemandVideo className="ml-2 text-xl" />
        </button>
    </div>
    )
};
