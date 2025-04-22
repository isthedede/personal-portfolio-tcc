
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AboutPreview from "@/components/AboutPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-dancing text-toyama-orange text-center mb-12">
              Nossos Produtos e Serviços
            </h2>
            
            <div className="space-y-20">
              <ProductCategory 
                title="Caixas e Laços Personalizados" 
                description="Caixas artesanais decoradas com laços exclusivos para presentes especiais, datas comemorativas ou apenas para demonstrar carinho. Cada peça é única e personalizada de acordo com sua preferência."
                imageSrc="sacos_caixas.png"
                link="/produtos/caixas"
              />
              
              <ProductCategory 
                title="Cestas para Diversas Ocasiões" 
                description="Cestas preparadas com todo cuidado para aniversários, datas comemorativas, nascimentos, casamentos e muito mais. Você escolhe o tema e nós criamos uma cesta única e especial."
                imageSrc="cesta.png"
                link="/produtos/cestas"
                alignRight={true}
              />
              
              <ProductCategory 
                title="Floricultura" 
                description="Arranjos florais para todas as ocasiões: buquês, centros de mesa, decorações para eventos e muito mais. Trabalhamos com flores frescas selecionadas para garantir qualidade e beleza."
                imageSrc="flores.png"
                link="/produtos/flores"
              />
              
              <ProductCategory 
                title="Sobremesas" 
                description="Doces e sobremesas deliciosas feitas com ingredientes selecionados e muito carinho. Perfeitas para complementar seus presentes ou para adoçar momentos especiais."
                imageSrc="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                link="/produtos/sobremesas"
                alignRight={true}
              />
            </div>
          </div>
        </section>
        
        <AboutPreview />
        <Testimonials />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
