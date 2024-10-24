import { formatDateForDisplay } from "./formatDateForDisplay";

describe("formatDateForDisplay", () => {
  it("should format a valid ISO date string correctly", () => {
    const input = "2024-10-24";
    const expectedOutput = "24 OCT 24";
    expect(formatDateForDisplay(input)).toBe(expectedOutput);
  });

  it("should handle different valid ISO date strings", () => {
    const input1 = "2023-01-01";
    const expectedOutput1 = "01 JAN 23";
    expect(formatDateForDisplay(input1)).toBe(expectedOutput1);

    const input2 = "2022-12-31";
    const expectedOutput2 = "31 DEC 22";
    expect(formatDateForDisplay(input2)).toBe(expectedOutput2);
  });

  it("should throw an error for invalid date strings", () => {
    const invalidInputs = ["invalid-date", "2024-02-30", ""]; // Examples of invalid inputs

    invalidInputs.forEach((input) => {
      expect(() => formatDateForDisplay(input)).toThrowError();
    });
  });

  it("should handle leap year dates correctly", () => {
    const input = "2024-02-29"; // Leap year date
    const expectedOutput = "29 FEB 24";
    expect(formatDateForDisplay(input)).toBe(expectedOutput);
  });
});
