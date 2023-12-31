import { expect, test } from "vitest";
import { add, sub, multi, divide } from "./action";

test("Add action testing", () => {
  expect(add(1, 2)).toBe(3);
});

test("Subtract action testing", () => {
  expect(sub(5, 3)).toBe(2);
});

test("Multi action testing", () => {
  expect(multi(6, 4)).toBe(24);
});

test("Divide action testing", () => {
  expect(divide(10, 5)).toBe(2);
});
