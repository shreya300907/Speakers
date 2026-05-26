import { Speaker, speakers } from "@/data/mockSpeakers";

const delay = (msec: number) => new Promise(resolve => {
    setTimeout(resolve, msec);
});

const currYear = "2026";

export const speakerServices = {
    getCurrentSpeakers: async (): Promise<Speaker[]> => {
        await delay(2000);
        return speakers.filter((person) => person.year == currYear)
    },
    getPastSpeakers: async (): Promise<Speaker[]> => {
        await delay(2000);
        return speakers.filter((person) => person.year != currYear)
    },
    getSpeakersByYear: async (year: string): Promise<Speaker[]> => {
        await delay(2000);
        return speakers.filter((person) => person.year == year)
    },
    getSpeakers: async (): Promise<Speaker[]> => {
        await delay(2000);
        return speakers;
    },
    getSpeakersByName: async (name: string): Promise<Speaker[]> => {
        await delay(2000);
        return speakers.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
    }
}
