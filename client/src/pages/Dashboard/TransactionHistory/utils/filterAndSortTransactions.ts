import { Transaction } from "@/types";

export function filterAndSortTransactions(
  accountId: string,
  transactions: Transaction[]
): Transaction[] {
  return (
    transactions
      // Filter by account_id
      .filter((transaction) => transaction.account_id === accountId)
      // Sort by date (most recent first)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );
}
