
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current || !imageRef.current) return;

      gsap.from(textRef.current.children, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-16 bg-toyama-beige-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div ref={textRef} className="w-full md:w-1/2 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-dancing text-toyama-orange mb-6">
              Sobre Letícia
            </h2>
            <p className="text-toyama-brown mb-6">
              Com dedicação e paixão pelo artesanato, transformo materiais simples em verdadeiras obras de arte. Cada caixa, laço, arranjo floral e solução criativa é criada com atenção aos detalhes e pensando na felicidade de quem irá receber.
            </p>
            <p className="text-toyama-brown mb-6">
              Meu objetivo é fazer parte dos seus momentos especiais, criando lembranças únicas através do meu trabalho artesanal.
            </p>
            <Link 
              to="/sobre#nossa-historia" 
              className="text-toyama-orange hover:text-toyama-orange-light transition-colors"
            >
              Conheça minha história
            </Link>
          </div>
          
          <div ref={imageRef} className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="/assets/sobre_leticia.jpg" 
                alt="Sobre" 
                loading="lazy" 
                decoding="async"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
