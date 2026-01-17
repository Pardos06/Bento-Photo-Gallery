import { useEffect, useState } from "react";
import type { Photo } from "../types/photo";
import { getPhotos } from "../services/photoService";

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPhotos()
      .then(setPhotos)
      .catch(() => setError("Error al cargar imágenes"))
      .finally(() => setLoading(false));
  }, []);

  return { photos, loading, error };
};
