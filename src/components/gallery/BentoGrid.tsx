import BentoItem from "./BentoItem";
import type { Photo } from "../../types/photo";
import { getRandomSize } from "../../hooks/bentoPattern";

type Props = {
  photos: Photo[];
};

function BentoGrid({ photos }: Props) {
  return (
    <section className="bento-grid">
      {photos.map((photo, index) => (
        <BentoItem
          key={photo.id}
          photo={photo}
          size={getRandomSize()}
          index={index}
        />
      ))}
    </section>
  );
}

export default BentoGrid;
