
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="bg-toyama-beige py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-dancing text-toyama-orange mb-6">
              Entre em Contato
            </h1>
            <p className="text-toyama-brown text-xl max-w-3xl mx-auto">
              Estamos prontos para atender sua solicitação e criar algo especial para você.
            </p>
          </div>
        </div>
        
        {/* Contact Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-dancing text-toyama-orange mb-8">
                  Fale Conosco
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-toyama-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-toyama-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-toyama-orange mb-2">Endereço</h3>
                      <p className="text-toyama-brown">
                        Rua Barão de Cotegipe, 373<br />
                        Ribeirão Preto, SP
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-toyama-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-toyama-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-toyama-orange mb-2">Telefone</h3>
                      <p className="text-toyama-brown">
                        <a href="tel:+5516997177111" className="hover:text-toyama-orange transition-colors">
                          (16) 99717-7111
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-toyama-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-toyama-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-toyama-orange mb-2">E-mail</h3>
                      <p className="text-toyama-brown">
                        <a href="mailto:leticiatoyama71@gmail.com" className="hover:text-toyama-orange transition-colors">
                          leticiatoyama71@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-toyama-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-toyama-orange">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-toyama-orange mb-2">WhatsApp</h3>
                      <p className="text-toyama-brown">
                        <a 
                          href="https://api.whatsapp.com/send?phone=%205516997177111&text=Ol%C3%A1%2C+tudo+bem%3F" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-toyama-orange transition-colors"
                        >
                          (16) 99717-7111
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-medium text-toyama-orange mb-4">Redes Sociais</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/leticiatoyama/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-toyama-orange/10 rounded-full flex items-center justify-center hover:bg-toyama-orange hover:text-white transition-colors text-toyama-orange"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="https://www.facebook.com/caixasartesanaisefloricultura" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-toyama-orange/10 rounded-full flex items-center justify-center hover:bg-toyama-orange hover:text-white transition-colors text-toyama-orange"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-dancing text-toyama-orange mb-8">
                  Envie uma Mensagem
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-toyama-brown mb-2">
                      Nome
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-toyama-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-toyama-orange" 
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-toyama-brown mb-2">
                      E-mail
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-toyama-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-toyama-orange" 
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-toyama-brown mb-2">
                      Telefone
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-toyama-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-toyama-orange" 
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-toyama-brown mb-2">
                      Assunto
                    </label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-2 border border-toyama-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-toyama-orange"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="caixas">Caixas e Laços</option>
                      <option value="cestas">Cestas</option>
                      <option value="flores">Floricultura</option>
                      <option value="sobremesas">Sobremesas</option>
                      <option value="outro">Outro Assunto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-toyama-brown mb-2">
                      Mensagem
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-toyama-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-toyama-orange" 
                      placeholder="Descreva o que você deseja..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-toyama-orange text-white px-6 py-3 rounded-md hover:bg-toyama-orange-light transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-toyama-beige">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-dancing text-toyama-orange mb-8">
              Nossa Localização
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2900953114026!2d-47.81299238884193!3d-21.177880781747868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be4b3c84659d%3A0x527fe3fd0d849f51!2sR.%20Bar%C3%A3o%20de%20Cotegipe%2C%20373%20-%20Vila%20Tiberio%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014050-420!5e0!3m2!1spt-BR!2sbr!4v1713237271045!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
