import Header from './components/layout/Header';
import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() =>{
    document.documentElement.setAttribute('data-theme', theme);
    },[theme]);
    return (
      <>
      <Header />
      <main>
        <h2>Welcome to Bento Photo Search</h2>
      </main>
      </>
    );
  }
export default App;
