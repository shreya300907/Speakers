import { Speaker } from "@/types/speakers"

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://speakers-backend.onrender.com"

const fetchSpeakers =
    async (): Promise<Speaker[]> => {
        console.log(`${API_URL}/api/v1/speakers`);
        const response = await fetch(
            `${API_URL}/api/v1/speakers`
        )

        if (!response.ok) {
            throw new Error("Failed to fetch speakers")
        }

        const result = await response.json()
        console.log(result);
        return result.data
    }

export const speakerServices = {

    getSpeakers: async () => {
        return fetchSpeakers()
    },

    getCurrentSpeakers: async () => {

        const speakers =
            await fetchSpeakers()

        const currYear =
            2026

        return speakers.filter(
            (person) => person.year == currYear
        )
    },

    getPastSpeakers: async () => {

        const speakers =
            await fetchSpeakers()

        const currYear =
            2026

        return speakers.filter(
            (person) => (person.year != currYear)
        )
    },

    getSpeakersByYear:
        async (year: number) => {

            const speakers =
                await fetchSpeakers()

            return speakers.filter(
                (person) => person.year == year
            )
        },

    getSpeakersByName:
        async (name: string) => {

            const speakers =
                await fetchSpeakers()

            return speakers.filter((person) =>
                person.name
                    .toLowerCase()
                    .includes(name.toLowerCase())
            )
        }
}