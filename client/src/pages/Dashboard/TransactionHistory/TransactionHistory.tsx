import { useEffect, useState } from "react";

import { Account, Transaction } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import { filterAndSortTransactions } from "./utils/filterAndSortTransactions";
import TransactionList from "./TransactionList/TransactionList";

interface ComponentProps {
  accounts: Account[];
  transactions: Transaction[];
}

const TransactionHistory: React.FC<ComponentProps> = ({
  accounts,
  transactions,
}) => {
  const defaultAccountId = accounts.length > 0 ? accounts[0].account_id : "";

  const [selectedAccountId, setSelectedAccountId] =
    useState<string>(defaultAccountId);

  const renderTransactions = filterAndSortTransactions(
    selectedAccountId,
    transactions
  );

  const handleAccountChange = (value: string) => {
    setSelectedAccountId(value);
  };

  useEffect(() => {
    if (!selectedAccountId && accounts.length > 0) {
      setSelectedAccountId(defaultAccountId);
    }
  }, [accounts]);

  return (
    <Section>
      <>
        <SectionHeading variant="dark">
          Your Transaction History.
        </SectionHeading>
        <div className="pb-10">
          <Select onValueChange={handleAccountChange} value={selectedAccountId}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              {accounts.map((account) => {
                return (
                  <SelectItem
                    key={account.account_id}
                    value={account.account_id}
                  >
                    {account.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        {selectedAccountId && renderTransactions.length > 0 ? (
          <TransactionList transactions={renderTransactions} />
        ) : (
          <p>No transactions to display</p>
        )}
      </>
    </Section>
  );
};

export default TransactionHistory;
