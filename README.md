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
import { wilks, wilks2020 } from "wilks";

const calculateWilks = wilks({ total: 612.5, bodyweight: 56, gender: "female", unit: "kg" }); // 720.67
const calculateWilks2020 = wilks2020({ total: 612.5, bodyweight: 56, gender: "female", unit: "kg" }); // 847.27
```

## ⭐ Usage

The module currently exports `"wilks"` and `"wilks/helpers"`. You can check the [tests](./src/__tests__) to see more examples.

### `wilks`

```ts
import { wilks, wilks2020, dots } from "wilks";

const calculateWilks = wilks({ total: 612.5, bodyweight: 56, gender: "female", unit: "kg" }); // 720.67
const calculateWilks2020 = wilks2020({ total: 612.5, bodyweight: 56, gender: "female", unit: "kg" }); // 847.27
const calculateDots = dots({ total: 612.5, bodyweight: 56, gender: "female", unit: "kg" }); // 709.96
```

### `wilks/helpers`

Exports `roundToDecimal(input: number, decimal: number): number` and `convertWeight(weight: number, unit: "kg" | "lb", decimal = 1): number`.

```ts
import { roundToDecimal, convertWeight } from "wilks/helpers";

console.log(roundToDecimal(123.333, 2)); // 123.33
console.log(convertWeight(163.1, "lb")); // 74
console.log(convertWeight(163.1, "lb", 2)); // 73.98
```

## 📍 Roadmap

- [x] Wilks Formula 2020 Edition
- [ ] Dots Calculator
- [ ] IPF GL Points Calculator
- [ ] One Rep Max Calculator
