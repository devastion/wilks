import { calculateWilks } from "wilks/2020";

describe("test wilks 2020 formula for male lifters", () => {
  test("700kg total @ 100kg bw expects 510.55 wilks", () => {
    expect.assertions(2);

    const metricWilks = calculateWilks(
      "m", 100, 700, "metric",
    );
    const imperialWilks = calculateWilks(
      "m", 220.47, 1543.24, "imperial",
    );

    expect(metricWilks).toBe(510.55);

    expect(imperialWilks).toBe(510.55);
  });
});

describe("test wilks 2020 formula for female lifters", () => {
  test("375kg total @ 58kg bw expects 506.06 wilks", () => {
    expect.assertions(2);

    const metricWilks = calculateWilks(
      "f", 58, 375, "metric",
    );
    const imperialWilks = calculateWilks(
      "f", 127.868, 826.733, "imperial",
    );

    expect(metricWilks).toBe(506.07);

    expect(imperialWilks).toBe(506.07);
  });
});
