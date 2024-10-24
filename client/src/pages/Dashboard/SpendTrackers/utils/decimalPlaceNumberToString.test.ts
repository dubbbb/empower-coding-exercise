import { decimalPlaceNumberToString } from "./decimalPlaceNumberToString";

describe("decimalPlaceNumberToString", () => {
  it("should convert a positive number to a string with two decimal places", () => {
    const result = decimalPlaceNumberToString(123.456);
    expect(result).toBe("123.46");
  });

  it("should convert a negative number to a string with two decimal places", () => {
    const result = decimalPlaceNumberToString(-123.456);
    expect(result).toBe("-123.46");
  });

  it("should handle whole numbers and return them as strings with two decimal places", () => {
    const result = decimalPlaceNumberToString(100);
    expect(result).toBe("100.00");
  });

  it("should handle zero correctly", () => {
    const result = decimalPlaceNumberToString(0);
    expect(result).toBe("0.00");
  });

  it("should round to two decimal places correctly", () => {
    const result1 = decimalPlaceNumberToString(2.345);
    expect(result1).toBe("2.35");

    const result2 = decimalPlaceNumberToString(2.344);
    expect(result2).toBe("2.34");
  });

  it("should convert small decimal numbers to string with two decimal places", () => {
    const result = decimalPlaceNumberToString(0.1);
    expect(result).toBe("0.10");
  });

  it("should convert large numbers correctly", () => {
    const result = decimalPlaceNumberToString(123456789.123456);
    expect(result).toBe("123456789.12");
  });
});
