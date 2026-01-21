import BentoItem, {type BentoSize} from "./BentoItem";
import type { Photo } from "../../types/photo";

type Props = {
  photos: Photo[];
  pattern: BentoSize[];
};

function BentoGrid({photos, pattern}: Props) {
  return (
    <section className="bento-grid">
      {photos.map((photo, index) => (
        <BentoItem
          key={photo.id}
          photo={photo}
          size={pattern[index]}
          index={index}
        />
      ))}
    </section>
  );
}

export default BentoGrid;