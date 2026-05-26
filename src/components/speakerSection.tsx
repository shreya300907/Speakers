import { Speaker } from "@/data/mockSpeakers";
import SpeakerCard from "./speakerCard";

export default function SpeakerSection({ speakers, isLoading }: { speakers: Speaker[]; isLoading: boolean }) {
    return (
        <>
            {isLoading ? (
                <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-8 place-items-center ">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SpeakerCard
                            key={index}
                            speaker=""
                            title=""
                            isLoading={true}
                        />
                    ))
                    }
                </div>
            ) : (
                <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-8 place-items-center ">
                    {speakers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.id}
                            speaker={speaker.name}
                            title={speaker.title}
                        />
                    ))}
                </div>
            )}
        </>
    );
}