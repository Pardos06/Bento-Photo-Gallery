import { useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import { useThemeStore } from "./store/themeStore";
import { usePhotos } from "./hooks/usePhotos";
import BentoGrid from "./components/gallery/BentoGrid";
import BentoSkeleton from "./components/gallery/BentoSkeleton";
import { generateBentoPattern } from "./hooks/bentoPattern";
import type { BentoSize } from "./hooks/bentoPattern";

const INITIAL_ITEMS = 24;

function App() {
  const theme = useThemeStore((state) => state.theme);
  const { photos, loading, error } = usePhotos();

  const patternRef = useRef<BentoSize[]>(
    generateBentoPattern(INITIAL_ITEMS)
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Header />

      <main>
        {error && <p>{error}</p>}

        {loading && (
          <BentoSkeleton pattern={patternRef.current} />
        )}

        {!loading && !error && (
          <BentoGrid
            photos={photos.slice(0, patternRef.current.length)}
            pattern={patternRef.current}
          />
        )}
      </main>
    </>
  );
}

export default App;
