import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

import { calculateWilks } from "wilks";

describe("test male lifters", () => {
  it("680kg total @ 74.8kg bw expect 485.44 wilks", () => {
    const metricWilks = calculateWilks(
      "m", 74.8, 680, "metric",
    );
    const imperialWilks = calculateWilks(
      "m", 164.9058, 1499.14, "imperial",
    );

    assert.strictEqual(metricWilks, 485.44);

    assert.strictEqual(imperialWilks, 485.44);
  });

  it("830kg total @ 92.3kg bw expect 523.29 wilks", () => {
    const metricWilks = calculateWilks(
      "m", 92.3, 830, "metric",
    );
    const imperialWilks = calculateWilks(
      "m", 203.4867, 1829.84, "imperial",
    );

    assert.strictEqual(metricWilks, 523.29);

    assert.strictEqual(imperialWilks, 523.29);
  });
});

describe("test female lifters", () => {
  it("352.5kg total @ 53.2kg bw expect 431.73 wilks", () => {
    const metricWilks = calculateWilks(
      "f", 53.2, 352.5, "metric",
    );
    const imperialWilks = calculateWilks(
      "f", 117.2859, 777.12947, "imperial",
    );

    assert.strictEqual(metricWilks, 431.73);

    assert.strictEqual(imperialWilks, 431.73);
  });

  it("322.5kg total @ 76.45kg bw expect 302.99 wilks", () => {
    const metricWilks = calculateWilks(
      "f", 76.45, 322.5, "metric",
    );
    const imperialWilks = calculateWilks(
      "f", 168.5434, 710.9908, "imperial",
    );

    assert.strictEqual(metricWilks, 302.99);

    assert.strictEqual(imperialWilks, 302.99);
  });
});
