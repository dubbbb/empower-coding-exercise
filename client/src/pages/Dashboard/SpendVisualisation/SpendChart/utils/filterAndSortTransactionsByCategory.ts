import { Transaction } from "@/types";

export function filterAndSortTransactionsByCategory(
  categoryId: string,
  transactions: Transaction[]
): Transaction[] {
  return transactions
    .filter((transaction) => transaction.category_id === categoryId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
