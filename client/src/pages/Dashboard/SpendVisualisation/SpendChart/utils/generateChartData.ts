import { format, subDays } from "date-fns";

import { Transaction } from "@/types";

import { ChartData } from "../types";
import { filterAndSortTransactionsByCategory } from "./filterAndSortTransactionsByCategory";

export function generateChartData(
  categoryId: string,
  numberOfDaysInHistory: number,
  spendLimit: number,
  transactions: Transaction[]
): ChartData[] {
  const filteredTransactions = filterAndSortTransactionsByCategory(
    categoryId,
    transactions
  );

  const chartData: ChartData[] = [];
  let accumulatedSpend = 0;

  for (let i = 0; i < numberOfDaysInHistory; i++) {
    // Backfill dates from today
    const rawDate = subDays(new Date(), i);

    // Format the date as THU 24 OCT
    const formattedDate = format(rawDate, "eee dd MMM").toUpperCase();

    // Accumulate spend for transactions that happened on or before this day
    const dailySpend = filteredTransactions
      .filter((transaction) => new Date(transaction.date) <= rawDate)
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    // Keep updating accumulated spend
    accumulatedSpend = dailySpend;

    chartData.unshift({
      currentSpend: Math.ceil(accumulatedSpend),
      date: formattedDate,
      spendLimit: Math.ceil(spendLimit),
    });
  }

  return chartData;
}
