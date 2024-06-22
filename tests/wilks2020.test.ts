import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

import { calculateWilks } from "wilks/2020";

describe("test wilks 2020 formula for male lifters", () => {
  it("700kg total @ 100kg bw expects 510.55 wilks", () => {
    const metricWilks = calculateWilks(
      "m", 100, 700, "metric",
    );
    const imperialWilks = calculateWilks(
      "m", 220.47, 1543.24, "imperial",
    );

    assert.strictEqual(metricWilks, 510.55);

    assert.strictEqual(imperialWilks, 510.55);
  });
});

describe("test wilks 2020 formula for female lifters", () => {
  it("375kg total @ 58kg bw expects 506.06 wilks", () => {
    const metricWilks = calculateWilks(
      "f", 58, 375, "metric",
    );
    const imperialWilks = calculateWilks(
      "f", 127.868, 826.733, "imperial",
    );

    assert.strictEqual(metricWilks, 506.07);

    assert.strictEqual(imperialWilks, 506.07);
  });
});
