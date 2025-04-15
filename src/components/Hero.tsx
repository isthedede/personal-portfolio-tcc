
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-toyama-beige min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundBlendMode: "multiply"
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-dancing text-toyama-orange mb-6">
            Transformando momentos em memórias especiais
          </h1>
          <p className="text-toyama-brown text-xl mb-8 max-w-2xl">
            Caixas personalizadas, cestas para presentes, flores e sobremesas feitas com carinho para tornar cada ocasião única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/produtos" 
              className="bg-toyama-orange text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-toyama-orange-light transition-colors"
            >
              Ver Produtos
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contato" 
              className="border border-toyama-orange text-toyama-orange px-6 py-3 rounded-md inline-flex items-center hover:bg-toyama-orange hover:text-white transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
