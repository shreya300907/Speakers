"use client";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SpeakerCardProps = {
    speaker: string;
    title: string;
    isLoading?: boolean;
};

export default function SpeakerCard({ speaker, title, isLoading = false }: SpeakerCardProps) {
    const [isActive, setIsActive] = useState(false);

    if (isLoading) {
        return (
            <div className=" overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 w-[260px] ">

                <Skeleton
                    height={320}
                    baseColor="#18181b"
                    highlightColor="#27272a"
                />

                <div className="p-4 space-y-3">

                    <Skeleton
                        height={24}
                        width="80%"
                        baseColor="#18181b"
                        highlightColor="#27272a"
                    />

                    <Skeleton
                        height={14}
                        width="60%"
                        baseColor="#18181b"
                        highlightColor="#27272a"
                    />

                    <Skeleton
                        height={36}
                        width="40%"
                        borderRadius={8}
                        baseColor="#18181b"
                        highlightColor="#27272a"
                    />
                </div>
            </div>
        );
    }

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