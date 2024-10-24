import { Transaction } from "@/types";

import { filterAndSortTransactions } from "./filterAndSortTransactions";

describe("filterAndSortTransactions", () => {
  const transactions: Transaction[] = [
    {
      account_id: "account1",
      amount: 100,
      iso_currency_code: "USD",
      category_id: "food",
      date: "2024-10-22",
      merchant_name: "Restaurant A",
      merchant_id: "merchant1",
      logo_url: "http://example.com/logo1.png",
      website: "http://restaurant-a.com",
      payment_channel: "credit_card",
      pending: false,
    },
    {
      account_id: "account1",
      amount: 50,
      iso_currency_code: "USD",
      category_id: "transport",
      date: "2024-10-23",
      merchant_name: "Taxi Service",
      merchant_id: "merchant2",
      logo_url: "http://example.com/logo2.png",
      website: "http://taxi-service.com",
      payment_channel: "debit_card",
      pending: false,
    },
    {
      account_id: "account2",
      amount: 30,
      iso_currency_code: "USD",
      category_id: "entertainment",
      date: "2024-10-21",
      merchant_name: "Cinema",
      merchant_id: "merchant3",
      logo_url: "http://example.com/logo3.png",
      website: "http://cinema.com",
      payment_channel: "credit_card",
      pending: true,
    },
    {
      account_id: "account1",
      amount: 20,
      iso_currency_code: "USD",
      category_id: "food",
      date: "2024-10-24",
      merchant_name: "Restaurant B",
      merchant_id: "merchant4",
      logo_url: "http://example.com/logo4.png",
      website: "http://restaurant-b.com",
      payment_channel: "credit_card",
      pending: false,
    },
    {
      account_id: "account1",
      amount: 75,
      iso_currency_code: "USD",
      category_id: "transport",
      date: "2024-10-20",
      merchant_name: "Train Service",
      merchant_id: "merchant5",
      logo_url: "http://example.com/logo5.png",
      website: "http://train-service.com",
      payment_channel: "debit_card",
      pending: false,
    },
  ];

  it("should filter transactions by account_id and sort by date", () => {
    const result = filterAndSortTransactions("account1", transactions);
    expect(result).toEqual([
      {
        account_id: "account1",
        amount: 20,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-24",
        merchant_name: "Restaurant B",
        merchant_id: "merchant4",
        logo_url: "http://example.com/logo4.png",
        website: "http://restaurant-b.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 50,
        iso_currency_code: "USD",
        category_id: "transport",
        date: "2024-10-23",
        merchant_name: "Taxi Service",
        merchant_id: "merchant2",
        logo_url: "http://example.com/logo2.png",
        website: "http://taxi-service.com",
        payment_channel: "debit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 100,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-22",
        merchant_name: "Restaurant A",
        merchant_id: "merchant1",
        logo_url: "http://example.com/logo1.png",
        website: "http://restaurant-a.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 75,
        iso_currency_code: "USD",
        category_id: "transport",
        date: "2024-10-20",
        merchant_name: "Train Service",
        merchant_id: "merchant5",
        logo_url: "http://example.com/logo5.png",
        website: "http://train-service.com",
        payment_channel: "debit_card",
        pending: false,
      },
    ]);
  });

  it("should return an empty array for a non-existing account_id", () => {
    const result = filterAndSortTransactions(
      "non_existing_account",
      transactions
    );
    expect(result).toEqual([]);
  });

  it("should handle an empty transactions array", () => {
    const result = filterAndSortTransactions("account1", []);
    expect(result).toEqual([]);
  });
});
