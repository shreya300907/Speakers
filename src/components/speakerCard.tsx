"use client";
import { useState } from "react";

type SpeakerCardProps = {
    speaker: string;
    title: string;
};

export default function SpeakerCard({ speaker, title }: SpeakerCardProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={`group relative overflow-hidden border-2 border-white rounded-xl transition-all duration-500 cursor-pointer
                hover:-translate-y-3 hover:shadow-md hover:shadow-white
                ${isActive ? "-translate-y-3 shadow-md shadow-white" : ""}`}
        >
            <div>
                <img
                    src={`/${speaker}.png`}
                    alt={`${speaker}`}
                    className={`h-80 min-w-60 object-cover rounded-t-xl transition-all duration-300
                        group-hover:blur-sm group-hover:brightness-50
                        ${isActive ? "blur-sm brightness-50" : ""}`}
                />
                <div className={`transition-opacity ease-out duration-500 absolute bottom-5 pl-4 flex flex-col gap-3
                    group-hover:opacity-100
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                    <h2 className="text-xl font-semibold text-left text-white">{`${speaker}`}</h2>
                    <div className="text-zinc-300 text-xs ">
                        {`${title}`}
                    </div>
                    <button className="bg-red-600 text-white font-semibold text-sm py-1 rounded-md cursor-pointer">
                        Know more
                    </button>
                </div>
            </div>
            <h2 className={`text-xl font-semibold text-left pl-4 py-2 tracking-wider transition-colors duration-300
                group-hover:text-black
                ${isActive ? "text-black" : "text-red-500"}`}
            >
                {`${speaker}`}
            </h2>
        </div>
    );
}