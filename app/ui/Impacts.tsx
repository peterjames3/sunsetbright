'use client';
import { useState, useEffect, useRef } from 'react';
import { Users, Leaf, Clock, Award } from "lucide-react";

interface ImpactsStatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

const stats: ImpactsStatProps[] = [
  {
    icon: <Users />,
    value: 100,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <Leaf />,
    value: 5000,
    suffix: "T",
    label: "CO2 Reduced",
  },
  {
    icon: <Clock />,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <Award />,
    value: 100,
    suffix: "%",
    label: "Satisfaction",
  },
];

const Impacts: React.FC = () => {
  return (
    <div className='wrapper flex flex-col md:flex md:flex-row flex-col gap-10'>
      <section className='w-full md:w-1/2 flex flex-col items-center justify-center'>
        <h4 className='headline text-foreground font-semibold'>
          Transforming Lives and Communities Through Solar Power
        </h4>
        <p className='p-text text-foreground'>
          As a pioneering force in the green energy sector, we&apos;ve been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible.
        </p>
      </section>
       <section className='w-full md:w-1/2'>
      {/* Stats Section */}
      <div className="grid grid-rows-4 gap-3 ">
        {stats.map((stat, index) => (
          <ImpactItem key={index} {...stat} />
        ))}
      </div>
      </section>
    </div>
  );
};

const ImpactItem: React.FC<ImpactsStatProps> = ({ icon, value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(Math.min(Math.floor(current * stepValue), value));
      if (current >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div
      ref={elementRef}
      className="text-center p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-primary mb-4 flex justify-center">{icon}</div>
      <div className="title font-bold text-foreground mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-foreground">{label}</div>
    </div>
  );
};

export default Impacts;
