import { Transaction } from "@/types";

import { filterAndSortTransactionsByCategory } from "./filterAndSortTransactionsByCategory";

describe("filterAndSortTransactionsByCategory", () => {
  const transactions: Transaction[] = [
    {
      account_id: "account1",
      amount: 10,
      iso_currency_code: "USD",
      category_id: "food",
      date: "2024-10-20",
      merchant_name: "Restaurant A",
      merchant_id: "merchant1",
      logo_url: "http://example.com/logo1.png",
      website: "http://restaurant-a.com",
      payment_channel: "credit_card",
      pending: false,
    },
    {
      account_id: "account1",
      amount: 20,
      iso_currency_code: "USD",
      category_id: "entertainment",
      date: "2024-10-21",
      merchant_name: "Cinema B",
      merchant_id: "merchant2",
      logo_url: "http://example.com/logo2.png",
      website: "http://cinema-b.com",
      payment_channel: "debit_card",
      pending: false,
    },
    {
      account_id: "account1",
      amount: 30,
      iso_currency_code: "USD",
      category_id: "food",
      date: "2024-10-19",
      merchant_name: "Restaurant C",
      merchant_id: "merchant3",
      logo_url: "http://example.com/logo3.png",
      website: "http://restaurant-c.com",
      payment_channel: "credit_card",
      pending: false,
    },
    {
      account_id: "account1",
      amount: 40,
      iso_currency_code: "USD",
      category_id: "transport",
      date: "2024-10-22",
      merchant_name: "Taxi D",
      merchant_id: "merchant4",
      logo_url: "http://example.com/logo4.png",
      website: "http://taxi-d.com",
      payment_channel: "credit_card",
      pending: false,
    },
    {
      account_id: "account1",
      amount: 50,
      iso_currency_code: "USD",
      category_id: "food",
      date: "2024-10-18",
      merchant_name: "Restaurant E",
      merchant_id: "merchant5",
      logo_url: "http://example.com/logo5.png",
      website: "http://restaurant-e.com",
      payment_channel: "debit_card",
      pending: false,
    },
  ];

  it("should filter transactions by category and sort them by date descending", () => {
    const result = filterAndSortTransactionsByCategory("food", transactions);
    expect(result).toEqual([
      {
        account_id: "account1",
        amount: 10,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-20",
        merchant_name: "Restaurant A",
        merchant_id: "merchant1",
        logo_url: "http://example.com/logo1.png",
        website: "http://restaurant-a.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 30,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-19",
        merchant_name: "Restaurant C",
        merchant_id: "merchant3",
        logo_url: "http://example.com/logo3.png",
        website: "http://restaurant-c.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 50,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-18",
        merchant_name: "Restaurant E",
        merchant_id: "merchant5",
        logo_url: "http://example.com/logo5.png",
        website: "http://restaurant-e.com",
        payment_channel: "debit_card",
        pending: false,
      },
    ]);
  });

  it("should return an empty array if no transactions match the category", () => {
    const result = filterAndSortTransactionsByCategory(
      "non-existent-category",
      transactions
    );
    expect(result).toEqual([]);
  });

  it("should return an empty array when the transactions array is empty", () => {
    const result = filterAndSortTransactionsByCategory("food", []);
    expect(result).toEqual([]);
  });

  it("should handle multiple transactions with the same date", () => {
    const duplicateDateTransactions: Transaction[] = [
      {
        account_id: "account1",
        amount: 10,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-20",
        merchant_name: "Restaurant A",
        merchant_id: "merchant1",
        logo_url: "http://example.com/logo1.png",
        website: "http://restaurant-a.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 15,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-20",
        merchant_name: "Restaurant B",
        merchant_id: "merchant2",
        logo_url: "http://example.com/logo2.png",
        website: "http://restaurant-b.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 30,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-19",
        merchant_name: "Restaurant C",
        merchant_id: "merchant3",
        logo_url: "http://example.com/logo3.png",
        website: "http://restaurant-c.com",
        payment_channel: "credit_card",
        pending: false,
      },
    ];

    const result = filterAndSortTransactionsByCategory(
      "food",
      duplicateDateTransactions
    );
    expect(result).toEqual([
      {
        account_id: "account1",
        amount: 10,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-20",
        merchant_name: "Restaurant A",
        merchant_id: "merchant1",
        logo_url: "http://example.com/logo1.png",
        website: "http://restaurant-a.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 15,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-20",
        merchant_name: "Restaurant B",
        merchant_id: "merchant2",
        logo_url: "http://example.com/logo2.png",
        website: "http://restaurant-b.com",
        payment_channel: "credit_card",
        pending: false,
      },
      {
        account_id: "account1",
        amount: 30,
        iso_currency_code: "USD",
        category_id: "food",
        date: "2024-10-19",
        merchant_name: "Restaurant C",
        merchant_id: "merchant3",
        logo_url: "http://example.com/logo3.png",
        website: "http://restaurant-c.com",
        payment_channel: "credit_card",
        pending: false,
      },
    ]);
  });
});
