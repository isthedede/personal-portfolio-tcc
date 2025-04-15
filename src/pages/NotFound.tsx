
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 bg-toyama-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-dancing text-toyama-orange mb-6">404</h1>
          <h2 className="text-3xl text-toyama-brown mb-6">Página não encontrada</h2>
          <p className="text-toyama-brown mb-8 max-w-lg mx-auto">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          <Link 
            to="/" 
            className="bg-toyama-orange text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-toyama-orange-light transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
