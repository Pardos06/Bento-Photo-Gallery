const SIZES = [
  'wide',
  'normal',
  'tall',
  'normal',
  'normal',
  'wide',
  'normal',
  'tall',
] as const;

const BentoSkeleton = () => {
  const items = Array.from({ length: SIZES.length * 2 });

  return (
    <section className="bento-grid">
      {items.map((_, index) => (
        <article
          key={index}
          className={`bento-item bento-item--${SIZES[index % SIZES.length]} bento-skeleton`}
        />
      ))}
    </section>
  );
};

export default BentoSkeleton;
