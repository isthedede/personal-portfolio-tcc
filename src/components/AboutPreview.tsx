
import React from 'react';
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-toyama-beige-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-dancing text-toyama-orange mb-6">
              Sobre Letícia Toyama
            </h2>
            <p className="text-toyama-brown mb-6">
              Com dedicação e paixão pelo artesanato, transformo materiais simples em verdadeiras obras de arte. Cada caixa, laço, arranjo floral e sobremesa é criado com atenção aos detalhes e pensando na felicidade de quem irá receber.
            </p>
            <p className="text-toyama-brown mb-6">
              Meu objetivo é fazer parte dos seus momentos especiais, criando lembranças únicas através do meu trabalho artesanal.
            </p>
            <Link 
              to="/sobre#nossa-historia" 
              className="text-toyama-orange hover:text-toyama-orange-light transition-colors"
            >
              Conheça minha história
            </Link>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Artesanato" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
