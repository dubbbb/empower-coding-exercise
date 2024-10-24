import { stringToDecimalPlaceNumber } from "./stringToDecimalPlaceNumber";

describe("stringToDecimalPlaceNumber", () => {
  it("should convert a string representing a float to a number with two decimal places", () => {
    expect(stringToDecimalPlaceNumber("123.456")).toBe(123.46);
  });

  it("should convert a string representing a negative float to a number with two decimal places", () => {
    expect(stringToDecimalPlaceNumber("-123.456")).toBe(-123.46);
  });

  it("should convert a string representing a whole number to a number with two decimal places", () => {
    expect(stringToDecimalPlaceNumber("100")).toBe(100.0);
  });

  it("should handle numeric inputs and return them as numbers with two decimal places", () => {
    expect(stringToDecimalPlaceNumber(100)).toBe(100.0);
    expect(stringToDecimalPlaceNumber(123.456)).toBe(123.46);
  });

  it("should handle zero correctly", () => {
    expect(stringToDecimalPlaceNumber(0)).toBe(0.0);
    expect(stringToDecimalPlaceNumber("0")).toBe(0.0);
  });

  it("should round correctly for numbers with more than two decimal places", () => {
    expect(stringToDecimalPlaceNumber(2.345)).toBe(2.35);
    expect(stringToDecimalPlaceNumber(2.344)).toBe(2.34);
  });

  it("should convert small decimal strings to numbers with two decimal places", () => {
    expect(stringToDecimalPlaceNumber("0.1")).toBe(0.1);
    expect(stringToDecimalPlaceNumber("0.123")).toBe(0.12);
  });

  it("should return NaN for invalid string inputs", () => {
    expect(stringToDecimalPlaceNumber("invalid")).toBeNaN();
    expect(stringToDecimalPlaceNumber("")).toBeNaN();
  });

  it("should return 0 for null input", () => {
    expect(stringToDecimalPlaceNumber(null)).toBe(0.0);
  });

  it("should return 0 for undefined input", () => {
    expect(stringToDecimalPlaceNumber(undefined)).toBe(0.0);
  });
});
