import { calculateCoefficient, convertPresicion } from "./utils";

const calculateCoefficientTest = calculateCoefficient("m", 89.9);
console.log(calculateCoefficientTest);

const convertMetric = convertPresicion(198.2, 1, true);
console.log(convertMetric);
