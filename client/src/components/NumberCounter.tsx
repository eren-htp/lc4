import { useEffect, useRef, useState } from 'react';

interface Counter {
  emoji: string;
  label: string;
  value: string | number;
  description: string;
}

interface NumberCounterProps {
  counters: Counter[];
}

export default function NumberCounter({ counters }: NumberCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<(string | number)[]>(
    counters.map(() => 0)
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      const newValues = counters.map((counter) => {
        if (typeof counter.value === 'number') {
          return Math.floor(counter.value * progress);
        }
        return counter.value;
      });

      setAnimatedValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, counters]);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-[#0D1B3E] to-[#1a2f5a] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold mb-4">
                {counter.emoji}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {animatedValues[index]}
                {typeof counter.value === 'string' && counter.value.replace(/^\d+/, '')}
              </div>
              <p className="text-lg font-semibold mb-2">{counter.label}</p>
              <p className="text-sm text-gray-300">{counter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
