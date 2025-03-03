import { render } from "preact";
import "normalize.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

import "./styles/fonts.css";
import "./styles/main.css";
import { AccountList } from "./components/AccountList";
import { AccountBase, ProjectBase } from "./types";
import { Section } from "./components/Section";
import { ProjectList } from "./components/ProjectList";

const Accounts: AccountBase[] = [
    {
        name: "GitHub",
        icon: "hn-github",
        link: "",
    },
    {
        name: "PicoCTF",
        icon: "hn-flag-solid",
        link: "",
    },
    {
        name: "Twitter",
        icon: "hn-x",
        link: "",
    },
];

const Projects: ProjectBase[] = [
    {
        name: "xyz",
        description: "Lorem ipsum dolor sit amet",
    },
];

export function App() {
    return (
        <div className="main">
            <div className="content">
                <div className="header">
                    <div className="user">
                        <i className="user_icon hn hn-cybersecurity" />
                        <h1 className="user_name">golferjoe</h1>
                    </div>
                    <AccountList accounts={Accounts} />
                </div>
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
                <Section title="Tech Stack" icon="hn-code">
                    <p style={{ margin: 0 }}>to do</p>
                </Section>
                <Section title="Projects" icon="hn-trophy-solid">
                    <ProjectList projects={Projects} />
                </Section>
            </div>
        </div>
    );
}

render(<App />, document.getElementById("app"));
