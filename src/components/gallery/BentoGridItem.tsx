import type { Photo } from '../../types/photo';

type BentoSize = 'wide' | 'tall' | 'normal';

interface BentoGridItemProps {
  photo: Photo;
  size: BentoSize;
}

const BentoGridItem = ({ photo, size }: BentoGridItemProps) => {
  return (
    <article className={`bento-item bento-item--${size}`}>
      <img src={photo.url} alt={photo.alt} loading="lazy" />
    </article>
  );
};

export default BentoGridItem;
