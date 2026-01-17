export const getRandomSize = (): "normal" | "wide" | "tall" | "big" | "hero" => {
  const rand = Math.random();

  if (rand < 0.05) return "hero"; 
  if (rand < 0.12) return "big";  
  if (rand < 0.25) return "wide"; 
  if (rand < 0.4) return "tall";

  return "normal"; 
};
