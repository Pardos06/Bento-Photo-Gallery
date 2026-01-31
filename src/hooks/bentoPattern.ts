// src/hooks/bentoPattern.ts

export type BentoSize =
  | "wide"
  | "tall"
  | "big"
  | "hero"
  | "panorama";

type SizeWeight = {
  size: BentoSize;
  weight: number;
};

const SIZE_WEIGHTS: SizeWeight[] = [
  { size: "wide", weight: 20 },
  { size: "tall", weight: 8 },
  { size: "big", weight: 32 },
  { size: "panorama", weight: 18 },
  { size: "hero", weight: 22 },
];

// Selección ponderada
const getWeightedSize = (): BentoSize => {
  const total = SIZE_WEIGHTS.reduce((sum, s) => sum + s.weight, 0);
  let rand = Math.random() * total;

  for (const item of SIZE_WEIGHTS) {
    if (rand < item.weight) return item.size;
    rand -= item.weight;
  }

  return "wide";
};

// 1 tamaño por imagen. Nada más. Nada menos.
export const generateBentoPattern = (count: number): BentoSize[] => {
  return Array.from({ length: count }, () => getWeightedSize());
};
