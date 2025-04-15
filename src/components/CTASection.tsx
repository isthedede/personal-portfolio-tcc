
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-toyama-orange text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-dancing mb-6">
          Pronto para tornar seu momento especial?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e crie uma experiência personalizada que ficará para sempre na memória.
        </p>
        <Link 
          to="/contato" 
          className="bg-white text-toyama-orange px-8 py-3 rounded-md inline-flex items-center hover:bg-toyama-beige transition-colors"
        >
          Fale Conosco
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
