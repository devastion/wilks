import { wilks } from "./wilks";

test("adds 1 + 2 to equal 3", () => {
  expect(wilks(1, 2)).toBe(3);
});
