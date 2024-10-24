import { Account } from "@/types";

export function sortAccountsByName(accounts: Account[]): Account[] {
  if (accounts.length > 1) {
    return accounts.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    return accounts;
  }
}
