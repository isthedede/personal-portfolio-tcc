
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-toyama-beige-dark text-toyama-brown pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-toyama-orange text-xl font-dancing mb-4">Letícia Toyama</h3>
            <p className="mb-4">Artesanato, floricultura e sobremesas personalizadas para tornar seus momentos especiais ainda mais marcantes.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/leticiatoyama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-toyama-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/caixasartesanaisefloricultura" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-toyama-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=%205516997177111&text=Ol%C3%A1%2C+tudo+bem%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-toyama-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-toyama-orange text-xl font-dancing mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Rua Barão de Cotegipe, 373<br />Ribeirão Preto, SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+5516997177111" className="hover:text-toyama-orange transition-colors">(16) 99717-7111</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:leticiatoyama71@gmail.com" className="hover:text-toyama-orange transition-colors">leticiatoyama71@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-toyama-orange text-xl font-dancing mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-toyama-orange transition-colors">Início</a>
              </li>
              <li>
                <a href="/produtos" className="hover:text-toyama-orange transition-colors">Nossos Produtos</a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-toyama-orange transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="/contato" className="hover:text-toyama-orange transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-toyama-brown/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Letícia Toyama. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
