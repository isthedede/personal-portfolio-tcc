
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;

      gsap.from(contentRef.current.children, {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(contentRef.current.querySelector("a"), {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-16 bg-toyama-orange text-white">
      <div ref={contentRef} className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-dancing mb-6">
          Pronto para tornar seu momento especial?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e crie uma experiência personalizada que ficará para sempre na memória.
        </p>
        <Link 
          to="/contato" 
          className="bg-white text-toyama-orange px-6 h-11 rounded-lg inline-flex items-center justify-center hover:bg-toyama-beige transition-colors text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toyama-orange"
        >
          Fale Conosco
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
