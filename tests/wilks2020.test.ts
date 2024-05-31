import { calculateWilks } from "wilks/2020";

describe("test wilks 200 formula for male lifter", () => {
  test("700kg total @ 100kg bw expects 510.55 wilks", () => {
    expect.assertions(1);

    const metricWilks = calculateWilks(
      "m", 100, 700, "metric",
    );

    expect(metricWilks).toBe(510.55);
  });
});
