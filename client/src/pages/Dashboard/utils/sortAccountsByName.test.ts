import { Account } from "@/types";

import { sortAccountsByName } from "./sortAccountsByName";

describe("sortAccountsByName", () => {
  const accounts: Account[] = [
    {
      account_id: "1",
      balances: { available: 1000, current: 1200, iso_currency_code: "USD" },
      name: "Checking Account",
      official_name: "My Checking Account",
      subtype: "checking",
      type: "depository",
    },
    {
      account_id: "2",
      balances: { available: 500, current: 700, iso_currency_code: "USD" },
      name: "Savings Account",
      official_name: "My Savings Account",
      subtype: "savings",
      type: "depository",
    },
    {
      account_id: "3",
      balances: { available: 1500, current: 1800, iso_currency_code: "USD" },
      name: "Business Account",
      official_name: "My Business Account",
      subtype: "business",
      type: "depository",
    },
  ];

  it("should sort accounts by name in ascending order", () => {
    const sortedAccounts = sortAccountsByName(accounts);
    expect(sortedAccounts[0].name).toBe("Business Account");
    expect(sortedAccounts[1].name).toBe("Checking Account");
    expect(sortedAccounts[2].name).toBe("Savings Account");
  });

  it("should return the same array if there is only one account", () => {
    const singleAccount: Account[] = [accounts[0]];
    const sortedAccounts = sortAccountsByName(singleAccount);
    expect(sortedAccounts).toEqual(singleAccount);
  });

  it("should return an empty array if the input is an empty array", () => {
    const sortedAccounts = sortAccountsByName([]);
    expect(sortedAccounts).toEqual([]);
  });

  it("should handle an array with accounts having the same name", () => {
    const duplicateNameAccounts: Account[] = [
      {
        account_id: "4",
        balances: { available: 1000, current: 1200, iso_currency_code: "USD" },
        name: "Shared Account",
        official_name: "My Shared Account",
        subtype: "checking",
        type: "depository",
      },
      {
        account_id: "5",
        balances: { available: 1500, current: 1800, iso_currency_code: "USD" },
        name: "Shared Account",
        official_name: "My Shared Account 2",
        subtype: "checking",
        type: "depository",
      },
    ];

    const sortedAccounts = sortAccountsByName(duplicateNameAccounts);
    expect(sortedAccounts[0].account_id).toBe("4");
    expect(sortedAccounts[1].account_id).toBe("5");
  });

  it("should not modify the original array", () => {
    const originalAccounts = [...accounts];
    sortAccountsByName(accounts);
    expect(accounts).toEqual(originalAccounts);
  });
});
