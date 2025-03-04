import { Technologies } from "../data";

export function TechStack() {
    return (
        <ul className="tech_list">
            {Technologies.map((tech, index) => (
                <li key={index} className="tech">
                    <i className={`tech_icon ${tech.icon}`} />
                    <div className="tech_details">
                        <h3 className="tech_name">{tech.name}</h3>
                        <p className="tech_desc">{tech.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
