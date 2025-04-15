
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-toyama-beige sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/738a05b4-b5c5-4643-b0e3-2a7bccc59493.png" alt="Letícia Toyama Logo" className="h-14" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-toyama-brown hover:text-toyama-orange transition-colors">Início</Link>
          <Link to="/produtos" className="text-toyama-brown hover:text-toyama-orange transition-colors">Produtos</Link>
          <Link to="/sobre" className="text-toyama-brown hover:text-toyama-orange transition-colors">Sobre</Link>
          <Link to="/contato" className="text-toyama-brown hover:text-toyama-orange transition-colors">Contato</Link>
        </nav>

        {/* Social Media - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/leticiatoyama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-toyama-orange hover:text-toyama-orange-light transition-colors" />
          </a>
          <a href="https://www.facebook.com/caixasartesanaisefloricultura" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-toyama-orange hover:text-toyama-orange-light transition-colors" />
          </a>
          <a href="tel:+5516997177111" aria-label="Telefone">
            <Phone className="w-5 h-5 text-toyama-orange hover:text-toyama-orange-light transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-toyama-brown">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-toyama-beige border-t border-toyama-beige-dark">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-toyama-brown hover:text-toyama-orange py-2 transition-colors" onClick={toggleMenu}>Início</Link>
              <Link to="/produtos" className="text-toyama-brown hover:text-toyama-orange py-2 transition-colors" onClick={toggleMenu}>Produtos</Link>
              <Link to="/sobre" className="text-toyama-brown hover:text-toyama-orange py-2 transition-colors" onClick={toggleMenu}>Sobre</Link>
              <Link to="/contato" className="text-toyama-brown hover:text-toyama-orange py-2 transition-colors" onClick={toggleMenu}>Contato</Link>
            </nav>
            <div className="flex space-x-6 mt-6 pb-2">
              <a href="https://www.instagram.com/leticiatoyama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-toyama-orange" />
              </a>
              <a href="https://www.facebook.com/caixasartesanaisefloricultura" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-toyama-orange" />
              </a>
              <a href="tel:+5516997177111" aria-label="Telefone">
                <Phone className="w-5 h-5 text-toyama-orange" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
