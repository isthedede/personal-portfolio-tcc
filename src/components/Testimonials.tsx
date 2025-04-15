
const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Encomendei uma cesta para o aniversário da minha mãe e ficou maravilhosa! Todos os detalhes foram pensados com muito carinho.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Oliveira",
    text: "As sobremesas são simplesmente deliciosas e as embalagens ficam lindas. Sempre peço para ocasiões especiais.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Fiquei encantada com as flores e a caixa personalizada! O atendimento foi excelente do início ao fim.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-toyama-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-dancing text-toyama-orange text-center mb-12">
          O que nossos clientes dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="#e25822" 
                    className="w-5 h-5"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                ))}
              </div>
              
              <p className="text-toyama-brown italic mb-4">"{testimonial.text}"</p>
              
              <p className="font-medium text-toyama-orange">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
