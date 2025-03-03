import { AccountBase } from "../types";
import { Account } from "./Account";

interface AccountListProps {
    accounts: AccountBase[];
}

export function AccountList({ accounts }: AccountListProps) {
    return (
        <ul className="accounts">
            {accounts.map((account, index) => (
                <Account key={index} {...account} />
            ))}
        </ul>
    );
}
