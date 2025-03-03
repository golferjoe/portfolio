import { ProjectBase } from "../types";

export function Project({ name, description }: ProjectBase) {
    return (
        <p style={{ margin: 0 }}>
            {name} - {description}
        </p>
    );
}
