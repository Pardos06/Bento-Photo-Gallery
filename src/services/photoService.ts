import type { Photo } from '../types/photo';

const MOCK_PHOTOS: Photo[] = Array.from({ length: 30 }).map((_, index) => ({
  id: crypto.randomUUID(),
  url: `https://picsum.photos/600/800?random=${index}`,
  alt: `Random photo ${index + 1}`,
  width: 600,
  height: 800,
}));

export const getPhotos = async (): Promise<Photo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PHOTOS), 600);
  });
};
