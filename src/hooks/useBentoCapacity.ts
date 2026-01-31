import { useEffect, useState } from "react";

export const useBentoCapacity = (
  columnWidth = 240,
  rowHeight = 180,
  gap = 20
) => {
  const [cells, setCells] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const columns = Math.max(
        1,
        Math.floor(window.innerWidth / (columnWidth + gap))
      );

      const rows =
        Math.ceil(window.innerHeight / (rowHeight + gap)) + 1;

      setCells(columns * rows);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [columnWidth, rowHeight, gap]);

  return cells;
};
