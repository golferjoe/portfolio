export interface Account {
    icon: string;
    name: string;
    link: string;
}

export interface Technology {
    icon: string;
    name: string;
    description: string;
}

export interface Project {
    name: string;
    description: string;
    repository: string;
    techStack: string[];
}
