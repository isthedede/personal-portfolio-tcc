
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
                imageSrc="/assets/sacos_caixas.png"
                link="/produtos/caixas"
                fixedHeight={false}
              />
              
              <ProductCategory 
                title="Cestas para Diversas Ocasiões" 
                description="Cestas preparadas com todo cuidado para aniversários, datas comemorativas, nascimentos, casamentos e muito mais. Você escolhe o tema e nós criamos uma cesta única e especial."
                imageSrc="/assets/cestas_diversas_ocasioes.jpg"
                link="/produtos/cestas"
                alignRight={true}
                fixedHeight={false}
              />
              
              <ProductCategory 
                title="Floricultura" 
                description="Arranjos florais para todas as ocasiões: buquês, centros de mesa, decorações para eventos e muito mais. Trabalhamos com flores frescas selecionadas para garantir qualidade e beleza."
                imageSrc="/assets/Floricultura.jpg"
                link="/produtos/flores"
                fixedHeight={false}
              />
              
              <ProductCategory 
                title="Cestas personalizadas" 
                description="Doces e sobremesas deliciosas feitas com ingredientes selecionados e muito carinho. Perfeitas para complementar seus presentes ou para adoçar momentos especiais."
                imageSrc="/assets/cestas_personalizadas_flores.jpg"
                link="/produtos/sobremesas"
                alignRight={true}
                fixedHeight={false}
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
