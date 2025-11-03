import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      gsap.from(backgroundRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      if (!reduceMotion) {
        gsap.to(backgroundRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.1, delay: 0.2, ease: 'power3.out' }
      );

      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.9,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    },
    { scope: heroRef }
  );

  return (
    <div ref={heroRef} className="relative bg-toyama-beige min-h-[80vh] flex items-center">
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('/assets/foto_fundo_inicio.jpg')",
          backgroundBlendMode: "multiply"
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-dancing text-toyama-orange mb-6">
            Transformando momentos em memórias especiais
          </h1>
          <p ref={textRef} className="text-toyama-brown text-xl mb-8 max-w-2xl">
            Caixas personalizadas, cestas para presentes, flores e sobremesas feitas com carinho para tornar cada ocasião única.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/produtos" 
              className="bg-toyama-orange text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-toyama-orange-light transition-colors"
            >
              Ver Produtos
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contato" 
              className="border border-toyama-orange text-toyama-orange px-6 py-3 rounded-md inline-flex items-center hover:bg-toyama-orange hover:text-white transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
