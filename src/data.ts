import { Account, Project, Technology } from "./types";

export const Accounts: Account[] = [
    {
        icon: "hn-github",
        name: "GitHub",
        link: "https://github.com/golferjoe",
    },
    {
        icon: "hn-flag-solid",
        name: "PicoCTF",
        link: "https://play.picoctf.org/users/golferjoe",
    },
];

export const Technologies: Technology[] = [
    {
        icon: "devicon-rust-original",
        name: "Rust",
        description: "CLI Tools & Backend",
    },
    {
        icon: "devicon-cplusplus-plain",
        name: "C++",
        description:
            "2D/3D Game Engines, Game Hacks & Tools for exploiting and analyzing apps, malware and games",
    },
    {
        icon: "devicon-wasm-original",
        name: "Assembly x86/x86-64",
        description:
            "Reverse Engineering & Learning how computers work at (almost) lowest level",
    },
    {
        icon: "devicon-python-plain",
        name: "Python",
        description: "CLI Tools & Automation Scripts for Cybersecurity",
    },
    {
        icon: "devicon-typescript-plain",
        name: "TypeScript",
        description: "Frontend & Backend",
    },
    {
        icon: "devicon-react-original",
        name: "ReactJS / PreactJS",
        description: "UI Library",
    },
    {
        icon: "devicon-svelte-plain",
        name: "Svelte",
        description: "Small Fullstack Services",
    },
];

export const Projects: Project[] = [
    {
        name: "CipherFiles",
        description: `An encrypted and anonymous file-sharing service with server-side asymmetric encryption.
        It was available to everyone from April 2024 to July 2024, during which we saw over 8000 files uploaded and more than 900GB of data stored.
        At its peak, the service handled over 1TB of bandwidth per day.`,
        repository: "https://github.com/resolutesystems",
        techStack: ["Rust", "PreactJS", "Cryptography", "CDN", "i18n"],
    },
];
