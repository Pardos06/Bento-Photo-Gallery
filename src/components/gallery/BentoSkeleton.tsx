// src/components/gallery/BentoSkeleton.tsx

import type { BentoSize } from "../../hooks/bentoPattern";

type Props = {
  pattern: BentoSize[];
};

const BentoSkeleton = ({ pattern }: Props) => {
  return (
    <section className="bento-grid">
      {pattern.map((size, index) => (
        <article
          key={index}
          className={`bento-item bento-item--${size}`}
        >
          <div className="bento-skeleton" />
        </article>
      ))}
    </section>
  );
};

export default BentoSkeleton;
