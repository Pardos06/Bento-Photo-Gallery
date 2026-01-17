import { useEffect } from "react";
import Header from "./components/layout/Header";
import { useThemeStore } from "./store/themeStore";
import { usePhotos } from "./hooks/usePhotos";
import BentoGrid from "./components/gallery/BentoGrid";
import { Loader } from "./components/layout/Loader";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const { photos, loading, error } = usePhotos();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />

      <main>
        {error && <p>{error}</p>}
        {!error && <BentoGrid photos={photos} />}
      </main>
    </>
  );
}

export default App;
