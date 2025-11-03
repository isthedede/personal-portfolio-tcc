
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const produtos = [
  {
    id: 1,
    category: "caixas",
    title: "Caixas personalizadas",
    items: [
      {
        id: "caixa1",
        name: "Caixa de Presente Elegante",
        description: "Caixa decorada com laço personalizado, ideal para presentes especiais.",
        image: "/assets/caixa1.jpg"
      },
      {
        id: "caixa2",
        name: "Caixa para Aniversário",
        description: "Decoração exclusiva para celebrar aniversários com estilo.",
        image: "/assets/caixa2.jpg"
      },
      {
        id: "caixa3",
        name: "Caixa de Recordações",
        description: "Para guardar memórias especiais com elegância e estilo.",
        image: "/assets/caixa3.jpg"
      }
    ]
  },
  {
    id: 2,
    category: "cestas",
    title: "Cestas para Diversas Ocasiões",
    items: [
      {
        id: "cesta1",
        name: "Cesta de Café da Manhã",
        description: "Completa com delícias selecionadas para um café da manhã especial.",
        image: "/assets/cesta1.jpg"
      },
      {
        id: "cesta2",
        name: "Cesta de Aniversário",
        description: "Personalizada com os produtos preferidos do aniversariante.",
        image: "/assets/cesta2.jpg"
      },
      {
        id: "cesta3",
        name: "Cesta de Dia dos Namorados",
        description: "Romântica e elegante, perfeita para surpreender quem você ama.",
        image: "/assets/cesta3.jpg"
      }
    ]
  },
  {
    id: 3,
    category: "flores",
    title: "Floricultura",
    items: [
      {
        id: "flor1",
        name: "Buquê de Rosas",
        description: "Arranjo clássico e elegante para qualquer ocasião.",
        image: "/assets/floricultura1.jpg"
      },
      {
        id: "flor2",
        name: "Centro de Mesa",
        description: "Arranjo floral para decorar sua mesa em ocasiões especiais.",
        image: "/assets/floricultura2.jpg"
      },
      {
        id: "flor3",
        name: "Arranjo para Eventos",
        description: "Decoração floral personalizada para casamentos, aniversários e eventos corporativos.",
        image: "/assets/floricultura3.jpg"
      }
    ]
  },
  {
    id: 4,
    category: "solucoes-criativas",
    title: "Soluções Criativas",
    items: [
      {
        id: "doce1",
        name: "",
        description: "",
        image: "/assets/10.jpg"
      },
      {
        id: "doce2",
        name: "",
        description: "",
        image: "/assets/florcriativa.jpg"
      },
      {
        id: "doce3",
        name: "",
        description: "",
        image: "/assets/13.jpg"
      }
    ]
  }
];

const Produtos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="bg-toyama-beige py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-dancing text-toyama-orange mb-6">
              Nossos Produtos
            </h1>
            <p className="text-toyama-brown text-xl max-w-3xl mx-auto">
              Conheça a variedade de produtos e serviços que oferecemos para tornar seus momentos especiais ainda mais marcantes.
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            {produtos.map((categoria) => (
              <section key={categoria.id} className="mb-16 scroll-mt-24" id={categoria.category}>
                <h2 className="text-3xl font-dancing text-toyama-orange mb-8 pb-4 border-b border-toyama-beige-dark">
                  {categoria.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoria.items.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name || "Imagem de produto"} 
                          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                          {item.name && (
                            <h3 className="text-xl font-medium text-toyama-orange mb-2">{item.name}</h3>
                          )}
                          {item.description && (
                            <p className="text-toyama-brown mb-4">{item.description}</p>
                          )}
                        <Link 
                          to="/contato" 
                          className="inline-block text-toyama-orange hover:text-toyama-orange-light transition-colors"
                        >
                          Solicitar informações
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        
        <section className="py-12 bg-toyama-beige-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-dancing text-toyama-orange mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-toyama-brown mb-8 max-w-2xl mx-auto">
              Podemos criar produtos personalizados especialmente para você. Entre em contato e conte-nos a sua ideia.
            </p>
            <Link 
              to="/contato" 
              className="bg-toyama-orange text-white px-8 py-3 rounded-md inline-flex items-center hover:bg-toyama-orange-light transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Produtos;
