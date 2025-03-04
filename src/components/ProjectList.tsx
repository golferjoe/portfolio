import { Projects } from "../data";

export function ProjectList() {
    return (
        <ul className="projects">
            {Projects.map((project, index) => (
                <li key={index} className="project">
                    <div className="project_header">
                        <h3 className="project_name">{project.name}</h3>
                        <a
                            className="project_repo"
                            target="_blank"
                            href={project.repository}
                        >
                            <i className="project_repo_icon hn hn-code-solid" />
                            repo
                        </a>
                    </div>
                    <p className="project_desc">{project.description}</p>
                    <div className="project_tech-stack">
                        {project.techStack.map((tech, index) => (
                            <div key={index} className="project_tech">
                                {tech}
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    );
}
