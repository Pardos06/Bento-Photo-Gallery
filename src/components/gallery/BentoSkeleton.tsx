import type { BentoSize } from '../../components/gallery/BentoItem';

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
