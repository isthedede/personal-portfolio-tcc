
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
  imageFit?: "cover" | "contain";
  fixedHeight?: boolean;
}

const ProductCategory = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  alignRight = false,
  imageFit = "contain",
  fixedHeight = true
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
        <div className={`rounded-lg overflow-hidden shadow-md ${fixedHeight ? 'h-80 md:h-[32rem]' : ''}`}> 
          <img 
            src={imageSrc} 
            alt={title} 
            className={`w-full ${fixedHeight ? 'h-full' : 'h-auto'} ${imageFit === "cover" ? "object-cover" : "object-contain"} transition-transform duration-500 hover:scale-105`}
          />
        </div>
      </div>
      
      <div ref={contentRef} className="w-full md:w-1/2">
        <h3 className="text-4xl md:text-5xl font-dancing text-toyama-orange mb-6">{title}</h3>
        <p className="text-lg md:text-xl leading-relaxed text-toyama-brown mb-8">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-toyama-orange hover:text-toyama-orange-light transition-colors text-base md:text-lg"
        >
          Ver mais
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
