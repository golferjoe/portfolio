import { render } from "preact";
import "normalize.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";
import "devicon";

import "./styles/fonts.css";
import "./styles/main.css";
import { Section } from "./components/Section";
import { ProjectList } from "./components/ProjectList";
import { TechStack } from "./components/TechStack";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// TODO: Create link (anchor) component

export function App() {
    return (
        <div className="main">
            <div className="content">
                <Header />
                <Section title="About Me" icon="hn-user-solid">
                    <p className="section_text">
                        I'm interested in reverse engineering games and
                        applications, often exploring game hacks to understand
                        memory structures, WinAPI, anti-debugging techniques,
                        and more. Currently, I'm diving into malware analysis
                        and prevention, sharpening my skills in cybersecurity.
                        When I'm not dissecting software, you'll find me coding
                        anything and everything in assembly, rust, c++ or
                        python.
                    </p>
                </Section>
                <Section title="Tech Stack" icon="hn-code-solid">
                    <TechStack />
                </Section>
                <Section title="Projects" icon="hn-trophy-solid">
                    <ProjectList />
                </Section>
                <Footer />
            </div>
        </div>
    );
}

render(<App />, document.getElementById("app"));
