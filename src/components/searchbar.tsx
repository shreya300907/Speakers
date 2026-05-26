"use client"
import { Search } from "lucide-react";
import SpeakerSection from "./speakerSection";
import { speakers } from "@/data/mockSpeakers";
import { SetStateAction, useState } from "react";
import { speakerServices } from "@/services/speakerServices";

export default function SearchBar() {
    const [reqSpeakers, setSpeakers] = useState(speakers);
    const [inputData, setInputData] = useState("");
    const [loading, setLoading] = useState(false);
    let handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setInputData(text);
        setLoading(true);
        speakerServices.getSpeakersByName(text).then(
            (result) => {
                setSpeakers(result);
                setLoading(false);
            }
        );
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = event.target.value;
        setLoading(true);
        if (filter === "") {
            speakerServices.getSpeakers().then((result) => setSpeakers(result));
        } else if (filter === "currYear") {
            speakerServices.getCurrentSpeakers().then((result) => setSpeakers(result));
        } else if (filter === "past") {
            speakerServices.getPastSpeakers().then((result) => setSpeakers(result));
        } else {
            speakerServices.getSpeakersByYear(filter).then((result) => setSpeakers(result));
        }
        setLoading(false);
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-8 mx-8 mb-12 self-start sm:mx-10 items-center">
                <div className="flex flex-row ">
                    <input type="text" onChange={handleInputChange} value={inputData} placeholder="Search Speakers.." className="w-full bg-zinc-900 border border-zinc-700 text-white rounded full py-3 pl-2 pr-12 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transtion-all placeholder:text-zinc-500" />
                    <div className="flex items-center justify-center -translate-x-9 ">
                        <Search className={"w-8 h-8 text-zinc-400 hover:text-zinc-600 cursor-pointer"} />
                    </div>
                </div>
                <div>
                    <select onChange={handleSelectChange} className="w-full bg-zinc-900 border border-zinc-700 text-white rounded py-3 pl-2 pr-12 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 cursor-pointer">
                        <option value="">All Speakers</option>
                        <option value="currYear">Current Speakers</option>
                        <option value="past">Past Speakers</option>
                        <option value="2026">TEDxIITP 2026</option>
                        <option value="2025">TEDxIITP 2025</option>
                        <option value="2024">TEDxIITP 2024</option>
                        <option value="2023">TEDxIITP 2023</option>
                        <option value="2022">TEDxIITP 2022</option>
                        <option value="2021">TEDxIITP 2021</option>
                        <option value="2020">TEDxIITP 2020</option>
                        <option value="2019">TEDxIITP 2019</option>
                    </select>
                </div>
            </div>
            <SpeakerSection speakers={reqSpeakers} isLoading={loading} />
        </>
    );
}