import { calculateWilks } from "wilks";

describe("test male lifters", () => {
  test("680kg total @ 74.8kg bw expect 485.44 wilks", () => {
    expect.assertions(2);

    const metricWilks = calculateWilks(
      "m", 74.8, 680, "metric",
    );
    const imperialWilks = calculateWilks(
      "m", 164.9058, 1499.14, "imperial",
    );

    expect(metricWilks).toBe(485.44);

    expect(imperialWilks).toBe(485.44);
  });

  test("830kg total @ 92.3kg bw expect 523.29 wilks", () => {
    expect.assertions(2);

    const metricWilks = calculateWilks(
      "m", 92.3, 830, "metric",
    );
    const imperialWilks = calculateWilks(
      "m", 203.4867, 1829.84, "imperial",
    );

    expect(metricWilks).toBe(523.29);

    expect(imperialWilks).toBe(523.29);
  });
});

describe("test female lifters", () => {
  test("352.5kg total @ 53.2kg bw expect 431.73 wilks", () => {
    expect.assertions(2);

    const metricWilks = calculateWilks(
      "f", 53.2, 352.5, "metric",
    );
    const imperialWilks = calculateWilks(
      "f", 117.2859, 777.12947, "imperial",
    );

    expect(metricWilks).toBe(431.73);

    expect(imperialWilks).toBe(431.73);
  });

  test("322.5kg total @ 76.45kg bw expect 302.99 wilks", () => {
    expect.assertions(2);

    const metricWilks = calculateWilks(
      "f", 76.45, 322.5, "metric",
    );
    const imperialWilks = calculateWilks(
      "f", 168.5434, 710.9908, "imperial",
    );

    expect(metricWilks).toBe(302.99);

    expect(imperialWilks).toBe(302.99);
  });
});
