import { Category } from "@/types";

import { getCategoryName } from "./getCategoryName";

describe("getCategoryName", () => {
  const categories: Category[] = [
    { id: "1", name: "Groceries" },
    { id: "2", name: "Utilities" },
    { id: "3", name: "Entertainment" },
  ];

  it("should return the name of the matching category by ID", () => {
    const result = getCategoryName(categories, "1");
    expect(result).toBe("Groceries");
  });

  it("should return an empty string for a non-matching category ID", () => {
    const result = getCategoryName(categories, "4");
    expect(result).toBe("");
  });

  it("should return an empty string when categories are undefined", () => {
    const result = getCategoryName(undefined, "1");
    expect(result).toBe("");
  });

  it("should return an empty string when categories array is empty", () => {
    const result = getCategoryName([], "1");
    expect(result).toBe("");
  });

  it("should return an empty string when categories are not provided and categoryId is empty", () => {
    const result = getCategoryName(undefined, "");
    expect(result).toBe("");
  });

  it("should handle categories with duplicate IDs and return the first match", () => {
    const duplicateCategories: Category[] = [
      { id: "1", name: "Groceries" },
      { id: "1", name: "Supermarkets" },
    ];
    const result = getCategoryName(duplicateCategories, "1");
    expect(result).toBe("Groceries");
  });
});
