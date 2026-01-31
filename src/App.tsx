// src/App.tsx

import { useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import { useThemeStore } from "./store/themeStore";
import { usePhotos } from "./hooks/usePhotos";
import BentoGrid from "./components/gallery/BentoGrid";
import BentoSkeleton from "./components/gallery/BentoSkeleton";
import { generateBentoPattern } from "./hooks/bentoPattern";
import type { BentoSize } from "./hooks/bentoPattern";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const { photos, loading, error } = usePhotos();

  const patternRef = useRef<BentoSize[] | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Genera el patrón UNA SOLA VEZ, basado en la cantidad real de imágenes
  if (!patternRef.current && photos.length > 0) {
    patternRef.current = generateBentoPattern(photos.length);
  }

  return (
    <>
      <Header />

      <main>
        {error && <p>{error}</p>}

        {loading && patternRef.current && (
          <BentoSkeleton pattern={patternRef.current} />
        )}

        {!loading && !error && patternRef.current && (
          <BentoGrid
            photos={photos}
            pattern={patternRef.current}
          />
        )}
      </main>
    </>
  );
}

export default App;
