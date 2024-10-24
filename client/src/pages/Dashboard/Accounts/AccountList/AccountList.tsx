import { Account } from "@/types";

import AccountDetail from "../AccountDetail/AccountDetail";

interface ComponentProps {
  accounts: Account[];
}

const AccountList: React.FC<ComponentProps> = ({ accounts }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {accounts.map((account) => {
        return (
          <div key={account.account_id} className="col-span-4">
            <AccountDetail
              balance={account.balances.current}
              currency={account.balances.iso_currency_code}
              name={account.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AccountList;
