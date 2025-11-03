
import { useState, useRef } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "back.out(1.7)",
      });

      if (navRef.current) {
        gsap.from(navRef.current.children, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          delay: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      if (socialRef.current) {
        gsap.from(socialRef.current.children, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          delay: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      }
    },
    { scope: headerRef }
  );

  // Header scrolled state
  useGSAP(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, { scope: headerRef });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className={`w-full sticky top-0 z-50 shadow-sm ${scrolled ? 'bg-toyama-beige/80 backdrop-blur' : 'bg-toyama-beige'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div ref={logoRef} className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/assets/logo_leticia.jpg" alt="Logo" className="h-14" />
          </Link>
        </div>

        <nav ref={navRef} className="hidden md:flex items-center space-x-8">
          <NavLink to="/" end className={({isActive}) => `group relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toyama-orange focus-visible:rounded-sm ${isActive ? 'text-toyama-orange' : 'text-toyama-brown hover:text-toyama-orange'}`}>
            <span className="py-1">Início</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-toyama-orange w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
          <NavLink to="/produtos" className={({isActive}) => `group relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toyama-orange focus-visible:rounded-sm ${isActive ? 'text-toyama-orange' : 'text-toyama-brown hover:text-toyama-orange'}`}>
            <span className="py-1">Produtos</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-toyama-orange w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
          <NavLink to="/sobre" className={({isActive}) => `group relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toyama-orange focus-visible:rounded-sm ${isActive ? 'text-toyama-orange' : 'text-toyama-brown hover:text-toyama-orange'}`}>
            <span className="py-1">Sobre Mim</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-toyama-orange w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
          <NavLink to="/contato" className={({isActive}) => `group relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toyama-orange focus-visible:rounded-sm ${isActive ? 'text-toyama-orange' : 'text-toyama-brown hover:text-toyama-orange'}`}>
            <span className="py-1">Fale Comigo</span>
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-toyama-orange w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
        </nav>

        <div ref={socialRef} className="hidden md:flex items-center space-x-4">
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

        <button onClick={toggleMenu} className="md:hidden text-toyama-brown">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
