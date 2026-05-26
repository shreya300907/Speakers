import { Speaker } from "@/data/mockSpeakers";
import SpeakerCard from "./speakerCard";

export default function SpeakerSection(speakers: { speakers: Speaker[] }) {
    return (
        <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-8 place-items-center ">
            {
                speakers.speakers.map((speaker) => {
                    return (<SpeakerCard key={speaker.id} speaker={speaker.name} title={speaker.title} />);
                })
            }
        </div>
    )
}