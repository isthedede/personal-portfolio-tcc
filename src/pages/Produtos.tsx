
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const produtos = [
  {
    id: 1,
    category: "caixas",
    title: "Caixas e Laços Personalizados",
    items: [
      {
        id: "caixa1",
        name: "Caixa de Presente Elegante",
        description: "Caixa decorada com laço personalizado, ideal para presentes especiais.",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "caixa2",
        name: "Caixa para Aniversário",
        description: "Decoração exclusiva para celebrar aniversários com estilo.",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "caixa3",
        name: "Caixa de Recordações",
        description: "Para guardar memórias especiais com elegância e estilo.",
        image: "https://images.unsplash.com/photo-1595265677860-9a3ef9b5e8b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "cesta2",
        name: "Cesta de Aniversário",
        description: "Personalizada com os produtos preferidos do aniversariante.",
        image: "https://images.unsplash.com/photo-1610478920392-95888b4a0bb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "cesta3",
        name: "Cesta de Dia dos Namorados",
        description: "Romântica e elegante, perfeita para surpreender quem você ama.",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        image: "https://images.unsplash.com/photo-1508369311883-9a21a9261f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "flor2",
        name: "Centro de Mesa",
        description: "Arranjo floral para decorar sua mesa em ocasiões especiais.",
        image: "https://images.unsplash.com/photo-1561181286-d3fee3253247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "flor3",
        name: "Arranjo para Eventos",
        description: "Decoração floral personalizada para casamentos, aniversários e eventos corporativos.",
        image: "https://images.unsplash.com/photo-1505407783111-1648d4df3288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ]
  },
  {
    id: 4,
    category: "sobremesas",
    title: "Sobremesas",
    items: [
      {
        id: "doce1",
        name: "Bombons Artesanais",
        description: "Bombons deliciosos feitos com chocolate nobre e recheios especiais.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "doce2",
        name: "Bolos Decorados",
        description: "Bolos festivos e decorados para celebrações especiais.",
        image: "https://images.unsplash.com/photo-1562777717-dc81a3ade715?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: "doce3",
        name: "Kit de Doces",
        description: "Conjuntos de doces variados, preparados com ingredientes selecionados.",
        image: "https://images.unsplash.com/photo-1586195831579-ba7f88cb6222?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-toyama-orange mb-2">{item.name}</h3>
                        <p className="text-toyama-brown mb-4">{item.description}</p>
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
