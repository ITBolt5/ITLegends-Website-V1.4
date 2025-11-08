import { useEffect, useRef, useState } from 'react';

function MicroDivider() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center py-3 md:py-5"
    >
      <div
        className={`w-[90%] md:w-[85%] h-[1px] rounded-full transition-opacity duration-600 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to right, #007BFF, #C70039)',
          opacity: 0.6,
          boxShadow: '0 0 6px rgba(0, 123, 255, 0.25), 0 0 6px rgba(199, 0, 57, 0.25)',
        }}
      />
    </div>
  );
}

export default MicroDivider;
