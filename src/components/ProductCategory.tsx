
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const categoryRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!categoryRef.current || !imageRef.current || !contentRef.current) return;

      const direction = alignRight ? -1 : 1;

      gsap.from(imageRef.current, {
        x: 100 * direction,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: categoryRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(contentRef.current.children, {
        x: -100 * direction,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: categoryRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: categoryRef, dependencies: [alignRight] }
  );

  return (
    <div 
      ref={categoryRef}
      className={`flex flex-col ${alignRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center`}
    >
      <div ref={imageRef} className="w-full md:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-md h-80 md:h-[32rem]">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      <div ref={contentRef} className="w-full md:w-1/2">
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
