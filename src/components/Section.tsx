import { ComponentChildren } from "preact";

interface SectionProps {
    title: string;
    icon: string;
    children: ComponentChildren;
}

export function Section({ title, icon, children }: SectionProps) {
    return (
        <>
            <div className="section_header">
                <i className={`section_icon hn ${icon}`} />
                <h3 class="section_title">{title}</h3>
            </div>
            {children}
        </>
    );
}
