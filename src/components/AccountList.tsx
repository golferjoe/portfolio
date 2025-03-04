import { Account } from "../types";

interface AccountListProps {
    accounts: Account[];
}

export function AccountList({ accounts }: AccountListProps) {
    return (
        <ul className="accounts">
            {accounts.map((account, index) => (
                <li key={index} className="account">
                    <i className={`hn ${account.icon} account_icon`} />
                    <a
                        className="account_link"
                        href={account.link}
                        target="_blank"
                    >
                        {account.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
