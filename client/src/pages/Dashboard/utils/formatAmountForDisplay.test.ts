import { formatAmountForDisplay } from "./formatAmountForDisplay";

describe("formatAmountForDisplay", () => {
  it("should format a positive number with two decimal places", () => {
    const input = 1234.5;
    const expectedOutput = "1,234.50";
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });

  it("should format a negative number with two decimal places", () => {
    const input = -1234.5;
    const expectedOutput = "-1,234.50";
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });

  it("should format a whole number without decimals", () => {
    const input = 1000;
    const expectedOutput = "1,000.00";
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });

  it("should format a number with trailing zeros correctly", () => {
    const input = 1234.0;
    const expectedOutput = "1,234.00";
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });

  it("should format zero correctly", () => {
    const input = 0;
    const expectedOutput = "0.00";
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });

  it("should format a very small number correctly", () => {
    const input = 0.0045; // less than one cent
    const expectedOutput = "0.00"; // rounded to two decimal places
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });

  it("should format a very large number correctly", () => {
    const input = 1234567890.1234;
    const expectedOutput = "1,234,567,890.12"; // rounded to two decimal places
    expect(formatAmountForDisplay(input)).toBe(expectedOutput);
  });
});
