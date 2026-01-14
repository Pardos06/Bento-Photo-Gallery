import { useThemeStore } from "../../store/themeStore";

function ThemeToggle() {
    const {theme, toggleTheme} = useThemeStore();
  return (
    <button 
    onClick={toggleTheme} 
    aria-label="Toggle theme"
    title="Cambiar tema">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
