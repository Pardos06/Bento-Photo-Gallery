import { useState } from "react";
import type { Photo } from "../../types/photo";

export type BentoSize =  "wide" | "tall" | "big" | "hero"| "panorama" | "portrait";

type Props = {
  photo: Photo;
  size: BentoSize;
  index: number;
};

const BentoItem = ({ photo, size, index }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <article
      className={`bento-item bento-item--${size} ${loaded ? "is-loaded" : ""}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {!loaded && <div className="bento-skeleton" />}
      <img
        src={photo.url}
        alt={photo.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </article>
  );
};

export default BentoItem;
