import SearchBar from "@/components/searchbar";
import SpeakerCard from "@/components/speakerCard";
import Image from "next/image";
import { speakers } from "@/data/mockSpeakers"
import SpeakerSection from "@/components/speakerSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <div className="relative w-full">
        <div>
          <Image
            src={"/title.png"}
            alt="Logo"
            width={2816}
            height={783}
            className="h-auto w-screen object-cover"
            priority
          />
        </div>
        <div className="top-3/4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mx-3 mb-3 md:mx-5 sm:mx-4">
            SPEAKERS
          </h1>
        </div>
        <div>
          <p className="mx-3 md:mx-5 sm:mx-4 font-[20] text-sm sm:text-xl md:text-2xl text-white">
            Thinkers. Doers. Idea-generators. These are the speakers who have delivered a talk featured on TEDxIITP. These are the people who brought TEDx to life in IITP.
          </p>
        </div>
      </div>
      <SearchBar />
    </div >
  );
}
