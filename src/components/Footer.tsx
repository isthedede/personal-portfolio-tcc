
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-toyama-beige-dark text-toyama-brown pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-toyama-orange text-xl font-dancing mb-4">Letícia</h3>
            <p className="mb-4">Artesanato, floricultura e soluções criativas para tornar seus momentos especiais ainda mais marcantes.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/leticiatoyama/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-toyama-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/caixasartesanaisefloricultura" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-toyama-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=%205516997177111&text=Ol%C3%A1%2C+tudo+bem%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-toyama-orange transition-colors">
                <FaWhatsapp size={20} />
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
                <a href="/produtos" className="hover:text-toyama-orange transition-colors">Meus Produtos</a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-toyama-orange transition-colors">Sobre Mim</a>
              </li>
              <li>
                <a href="/contato" className="hover:text-toyama-orange transition-colors">Fale Comigo</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-toyama-brown/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Letícia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
