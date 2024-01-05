# Wilks

Calculate wilks coefficient. This library includes the old version and the new 2020 version of wilks formula.

## Usage

`npm i wilks`

```ts
import { calculateWilksPoints } from "wilks";

const wilksPoints = calculateWilksPoints(
  gender,
  bodyWeight,
  total,
  unitType,
  isNewVersion,
);
```

- `gender` - "m" for male and "f" for female
- `bodyWeight (number)`
- `total (number)`
- `unitType` - "metric" for kgs and "imperial" for lbs
- `isNewVersion` - `false` to use old wilks formula and `new` to use 2020 version
