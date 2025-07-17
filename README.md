<div align="center">
  <h1>  
    <a href="https://www.npmjs.com/package/wilks">Wilks Calculator</a>
  </h1>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/wilks">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/wilks">
</div>

<br />

Calculate wilks score. Wilks formula is primarily used in powerlifting contests to identify the best lifter across different weight classes.

## 🚀 Quick Start

```sh
npm i wilks
```

```ts
import { wilks } from "wilks";

const calculateWilks = wilks({ total: 612.5, bodyweight: 56, gender: "f", unit: "kg" }); // 720.67
const calculateWilks2020 = wilks({ total: 612.5, bodyweight: 56, gender: "f", unit: "kg" }, true); // 847.27
```

## ⭐ Usage

The module currently exports `"wilks"`, `"wilks/utils"` and `"wilks/wilks"`. You can check the [tests](./src/__tests__) to see more examples.

### `wilks`

```ts
import { wilks } from "wilks";

const calculateWilks = wilks({ total: 612.5, bodyweight: 56, gender: "f", unit: "kg" }); // 720.67
const calculateWilks2020 = wilks({ total: 612.5, bodyweight: 56, gender: "f", unit: "kg" }, true); // 847.27
```

### `wilks/utils`

Exports `roundToDecimal(input: number, decimal: number): number` and `lbsToKilos(lbs: number, decimal = 1): number`.

```ts
import { roundToDecimal, lbsToKilos } from "wilks/utils";

console.log(roundToDecimal(123.333, 2)); // 123.33
console.log(lbsToKilos(163.1)); // 74
console.log(lbsToKilos(163.1, 2)); // 73.98
```

### `wilks/wilks`

Exports `wilks(input: WilksInput, use2020Formula = false): number`,
`calculateWilksCoefficient(input: Lifter, use2020Formula = false): number`, constants and types (see below).

```ts
import {
  wilks,
  calculateWilksCoefficient,
  maleCoefficient, // values used in calculateWilksCoefficient
  maleCoefficient2020, // values used in calculateWilksCoefficient
  femaleCoefficient, // values used in calculateWilksCoefficient
  femaleCoefficient2020, // values used in calculateWilksCoefficient
} from "wilks/wilks";

// Type definitions
import type { SBD, Total, Lifter, WilksInput } from "wilks/wilks";

const calculateWilks
  = wilks({ total: 612.5, bodyweight: 56, gender: "f", unit: "kg" }); // 720.67
const calculateWilks2020
  = wilks({ total: 612.5, bodyweight: 56, gender: "f", unit: "kg" }, true); // 847.27
const calculateCoefficient
  = calculateWilksCoefficient({ bodyweight: "56", gender: "f", unit: "kg" }); // 424.9514...
const calculateCoefficient2020
  = calculateWilksCoefficient({ bodyweight: "56", gender: "f", unit: "kg" }, true); // 433.7474...
```

## 📍 Roadmap

- [x] Wilks Formula 2020 Edition
- [ ] Dots Calculator
- [ ] IPF GL Points Calculator
- [ ] One Rep Max Calculator
