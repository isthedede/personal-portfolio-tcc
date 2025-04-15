
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCategoryProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  alignRight?: boolean;
}

const ProductCategory = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  alignRight = false 
}: ProductCategoryProps) => {
  return (
    <div className={`flex flex-col ${alignRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center`}>
      <div className="w-full md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-96">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-dancing text-toyama-orange mb-4">{title}</h3>
        <p className="text-toyama-brown mb-6">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-toyama-orange hover:text-toyama-orange-light transition-colors"
        >
          Ver mais
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
