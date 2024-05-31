# Wilks Calculator

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

// metric units by default
const wilks = calculateWilks("f", 53.2, 352.5); // 431.73
const wilksImperial = calculateWilks("m", 204.6, 2226.6, "imperial") // 635.09
```

## ⭐ Usage 

`calculateWilks(gender, bodyWeight, total, unit)`

- `gender` - accepts "m" for male and "f" for female
- `bodyweight` - accepts number as bodyweight (eg. 53.2)
- `total` - total lifted weight (eg. 352.5)
- `unit` - accepts "metric" and "imperial" ("metric" by default)

> [!CAUTION]
> Use the same unit type for bodyweight and total.

## 📍 Roadmap

- [ ] Wilks Formula 2020 Edition
- [ ] Dots Calculator
- [ ] IPF GL Points Calculator
