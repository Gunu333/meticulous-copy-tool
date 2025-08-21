import { Github, Instagram, Linkedin, Moon, Sun, Youtube } from "lucide-react";
import { useTheme } from "./theme-provider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 lg:px-12">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-primary rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-sm">🍵</span>
        </div>
        <span className="text-text-primary font-semibold text-lg">ChaiDocs</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-text-secondary hover:text-orange-primary transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
        <a href="#" className="text-text-secondary hover:text-orange-primary transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-text-secondary hover:text-orange-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-text-secondary hover:text-orange-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-text-secondary hover:text-orange-primary transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <button 
          className="text-text-secondary hover:text-orange-primary transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;