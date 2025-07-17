export type SBD = { squat: number; bench: number; deadlift: number };
export type Total = { total: number };
export type Lifter = { bodyweight: number; gender: "m" | "f"; unit: "kg" | "lb" };

export type WilksInput = Lifter & Partial<SBD> & Partial<Total>;
