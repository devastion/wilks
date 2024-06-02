<div align="center">
  <a href="https://www.npmjs.com/package/wilks" target="_blank">
    <h1>Wilks Calculator</h1>
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/wilks">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/wilks">
  </a>
</div>

<br />

Calculate wilks score. Wilks formula is primarily used in powerlifting contests to identify the best lifter across different weight classes.

> [!NOTE]
> The formula is tested against real results from WRPF meet.  
> Works best in metric units. Although there should be no difference if you use imperial units as well.  
> The result may differ from some websites, but this is because they round to second decimal for all calculations, not just the result. This make the formula less accurate.  

## 🚀 Quick Start

```sh
npm i wilks
```

```ts
import { calculateWilks } from "wilks";
// to use 2020 version import from "wilks/2020"
import { calculateWilks } from "wilks/2020";

// metric units by default
const wilks = calculateWilks("f", 53.2, 352.5); // 431.73
const wilksImperial = calculateWilks("m", 204.6, 2226.6, "imperial") // 635.09
```

## ⭐ Usage 

> [!CAUTION]
> Use the same unit type for bodyweight and total.

### Wilks (Original Version)

`calculateWilks(gender, bodyWeight, total, unit)`

- `gender` - accepts "m" for male and "f" for female
- `bodyweight` - accepts number as bodyweight (eg. 53.2)
- `total` - total lifted weight (eg. 352.5)
- `unit` - accepts "metric" and "imperial" ("metric" by default)

```ts
import { calculateWilks } from "wilks";

const metricWilks = calculateWilks(
  "m", 74.8, 680, "metric",
);
const imperialWilks = calculateWilks(
  "f", 168.5434, 710.9908, "imperial",
);
```

Checkout [test file](./tests/wilks.test.ts) for more examples.

### Wilks (2020 Version)

`calculateWilks(gender, bodyWeight, total, unit)`

- `gender` - accepts "m" for male and "f" for female
- `bodyweight` - accepts number as bodyweight (eg. 53.2)
- `total` - total lifted weight (eg. 352.5)
- `unit` - accepts "metric" and "imperial" ("metric" by default)

```ts
import { calculateWilks } from "wilks/2020";

const metricWilks = calculateWilks(
  "m", 74.8, 680, "metric",
);
const imperialWilks = calculateWilks(
  "f", 168.5434, 710.9908, "imperial",
);
```

Checkout [test file](./tests/wilks2020.test.ts) for more examples.

## 📍 Roadmap

- [x] Wilks Formula 2020 Edition
- [ ] Dots Calculator
- [ ] IPF GL Points Calculator
