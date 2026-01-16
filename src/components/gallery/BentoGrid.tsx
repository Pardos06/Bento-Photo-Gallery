import BentoGridItem from './BentoGridItem';
import { usePhotos } from '../../hooks/usePhotos';

const getSize = (index: number) => {
  if (index % 7 === 0) return 'wide';
  if (index % 11 === 0) return 'tall';
  return 'normal';
};

function BentoGrid() {
  const { photos, loading, error } = usePhotos();

  if (loading) return <p>Cargando imágenes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="bento-grid">
      {photos.map((photo, index) => (
        <BentoGridItem
          key={photo.id}
          photo={photo}
          size={getSize(index)}
        />
      ))}
    </section>
  );
}

export default BentoGrid;
