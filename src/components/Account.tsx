import { AccountBase } from "../types";

export function Account({ name, icon, link }: AccountBase) {
    return (
        <li className="account">
            <i className={`hn ${icon} account_icon`} />
            <a className="account_link" href={link} target="_blank">
                {name}
            </a>
        </li>
    );
}
