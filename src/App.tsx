import Header from './components/layout/Header';
import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import BentoGrid from './components/gallery/BentoGrid';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() =>{
    document.documentElement.setAttribute('data-theme', theme);
    },[theme]);
    return (
      <>
      <Header />
      <main>
        <BentoGrid />
      </main>
      </>
    );
  }
export default App;
