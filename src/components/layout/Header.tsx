import '../../styles/components/_header.scss';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">Bento Photo Gallery</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
