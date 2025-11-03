import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";

const Sobre = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#nossa-historia') {
      const element = document.getElementById('nossa-historia');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="bg-toyama-beige py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-dancing text-toyama-orange mb-6">
              Sobre Nós
            </h1>
            <p className="text-toyama-brown text-xl max-w-3xl mx-auto">
              Conheça a história e a paixão por trás das criações artesanais de Letícia.
            </p>
          </div>
        </div>
        
        <section id="nossa-historia" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/assets/sobre_leticia.jpg" 
                  alt="Letícia - Artesanato" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-dancing text-toyama-orange mb-6">
                  Nossa História
                </h2>
                <p className="text-toyama-brown mb-4">
                  A jornada de Letícia começou com sua paixão por criar peças artesanais únicas que pudessem transmitir emoções e tornar momentos ainda mais especiais. Com dedicação e muito estudo, o que começou como um hobby se transformou em um negócio cheio de personalidade.
                </p>
                <p className="text-toyama-brown mb-4">
                  Atendendo inicialmente amigos e familiares, o trabalho logo ganhou reconhecimento pela qualidade e atenção aos detalhes. Cada produto é pensado e desenvolvido com muito carinho, considerando a ocasião e o significado que cada peça terá para quem a recebe.
                </p>
                <p className="text-toyama-brown">
                  Hoje, nossa missão é continuar criando produtos artesanais que emocionem e surpreendam, transformando momentos comuns em lembranças extraordinárias.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-toyama-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-dancing text-toyama-orange text-center mb-12">
              Nossos Valores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-toyama-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e25822" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-toyama-orange mb-4">Qualidade</h3>
                <p className="text-toyama-brown">
                  Selecionamos cuidadosamente cada material utilizado em nossas criações, garantindo produtos de alta qualidade e durabilidade.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-toyama-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e25822" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-toyama-orange mb-4">Dedicação</h3>
                <p className="text-toyama-brown">
                  Cada produto é feito com muito carinho e atenção aos detalhes, buscando superar as expectativas de nossos clientes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-toyama-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e25822" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-toyama-orange mb-4">Exclusividade</h3>
                <p className="text-toyama-brown">
                  Criamos produtos personalizados e exclusivos, garantindo que cada peça seja única e especial como o momento que ela representa.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-toyama-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-dancing mb-6">
              Vamos criar algo especial juntos?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conte-nos a sua ideia e vamos transformá-la em realidade.
            </p>
            <Link 
              to="/contato" 
              className="bg-white text-toyama-orange px-8 py-3 rounded-md inline-flex items-center hover:bg-toyama-beige transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
