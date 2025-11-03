import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
      <div className="h-full bg-toyama-orange transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;


