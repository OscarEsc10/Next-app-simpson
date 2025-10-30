import React from "react";

export default function Header() {
    return (
        <header className="flex flex-row justify-around pt-4">
            <h3 className="text-2xl font-bold mb-8 text-yellow-300
             [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">The Simpsons</h3>
             <h3 className="text-xl cursor-pointer">Characters</h3>
             <h3 className="text-xl cursor-pointer">Episodes</h3>
             <h3 className="text-xl cursor-pointer">Locations</h3>
             <h3 className="text-xl cursor-pointer">Iconics pharse</h3>
             <h3 className="text-xl cursor-pointer">Quotes</h3>
        </header>
    )
}