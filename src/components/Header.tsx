
import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
            <img src="/assets/logo_leticia.jpg" alt="Letícia Toyama Logo" className="h-14" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-toyama-brown hover:text-toyama-orange transition-colors">Início</Link>
          <Link to="/produtos" className="text-toyama-brown hover:text-toyama-orange transition-colors">Produtos</Link>
          <Link to="/sobre" className="text-toyama-brown hover:text-toyama-orange transition-colors">Sobre Mim</Link>
          <Link to="/contato" className="text-toyama-brown hover:text-toyama-orange transition-colors">Fale Comigo</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/leticiatoyama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-toyama-orange hover:text-toyama-orange-light transition-colors" />
          </a>
          <a href="https://www.facebook.com/caixasartesanaisefloricultura" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-toyama-orange hover:text-toyama-orange-light transition-colors" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=%205516997177111&text=Ol%C3%A1%2C+tudo+bem%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="w-5 h-5 text-toyama-orange hover:text-toyama-orange-light transition-colors" />
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
              <Link to="/sobre" className="text-toyama-brown hover:text-toyama-orange py-2 transition-colors" onClick={toggleMenu}>Sobre Mim</Link>
              <Link to="/contato" className="text-toyama-brown hover:text-toyama-orange py-2 transition-colors" onClick={toggleMenu}>Fale Comigo</Link>
            </nav>
            <div className="flex space-x-6 mt-6 pb-2">
              <a href="https://www.instagram.com/leticiatoyama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-toyama-orange" />
              </a>
              <a href="https://www.facebook.com/caixasartesanaisefloricultura" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-toyama-orange" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=%205516997177111&text=Ol%C3%A1%2C+tudo+bem%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5 text-toyama-orange" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
