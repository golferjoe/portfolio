import { Accounts } from "../data";
import { AccountList } from "./AccountList";

export function Header() {
    return (
        <header>
            <div className="user">
                <i className="user_icon hn hn-cybersecurity" />
                <h1 className="user_name">golferjoe</h1>
            </div>
            <AccountList accounts={Accounts} />
        </header>
    );
}
