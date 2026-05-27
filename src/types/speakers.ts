export interface Speaker {
    _id?: string;
    name: string;
    image: string;
    title: string;
    body: string;
    isPublished?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    year: number;
}

// export const speakers: Speaker[] = [
//     {
//         id: "1",
//         name: "Speaker 1",
//         image: "/speaker1.jpg",
//         title: "Title 1",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         isPublished: true,
//         year: "2022",
//     },
//     {
//         id: "2",
//         name: "Speaker 2",
//         image: "/speaker2.jpg",
//         title: "Title 2",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         isPublished: true,
//         year: "2023",
//     },
//     {
//         id: "3",
//         name: "Speaker 3",
//         image: "/speaker3.jpg",
//         title: "Title 3",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         isPublished: false,
//         year: "2024",
//     },
// ];