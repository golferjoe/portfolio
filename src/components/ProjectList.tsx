import { ProjectBase } from "../types";
import { Project } from "./Project";

interface ProjectListProps {
    projects: ProjectBase[];
}

export function ProjectList({ projects }: ProjectListProps) {
    return (
        <ul className="projects">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </ul>
    );
}
