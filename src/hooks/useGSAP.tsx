import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  scope?: RefObject<HTMLElement> | string;
  dependencies?: React.DependencyList;
  revertOnUpdate?: boolean;
}

export const useGSAP = (
  callback: (context: gsap.Context) => void,
  options: UseGSAPOptions = {}
) => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const { scope, dependencies = [], revertOnUpdate = true } = options;

  useEffect(() => {
    let element: HTMLElement | null = null;
    
    if (scope) {
      if (typeof scope === 'string') {
        element = document.querySelector<HTMLElement>(scope);
      } else if ('current' in scope) {
        element = scope.current;
      }
    } else {
      element = scopeRef.current;
    }

    let ctx: gsap.Context | null = null;

    if (element) {
      ctx = gsap.context(callback, element);
    }

    return () => {
      if (revertOnUpdate && ctx) {
        ctx.revert();
      }
    };
  }, dependencies);

  return scopeRef;
};

export default useGSAP;

