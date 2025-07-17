import { strict as assert } from "node:assert";
import { test } from "node:test";

test("1+2 = 3", () => {
  assert.strictEqual(1 + 2, 3);
});

test("2+2 != 3", () => {
  assert.notStrictEqual(2 + 2, 3);
});

test("true is true", () => {
  assert.strictEqual(true, true);
});

test("false is false", () => {
  assert.strictEqual(false, false);
});
