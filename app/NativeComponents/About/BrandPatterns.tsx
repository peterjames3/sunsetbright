'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Brand {
  name: string;
  logoUrl: string;
  altText: string;
}

const brands: Brand[] = [
  {
    name: "JinKO",
    logoUrl: "/jinko logony.png",
    altText: "JinKO Solar Logo"
  },
  {
    name: "Exide",
    logoUrl: "/exide headerLogo.jpg",
    altText: "Exide Industries Logo"
  },
  {
    name: "Trina Solar",
    logoUrl: "/trinasolar logo.png",
    altText: "Trina Solar Logo"
  },
  {
    name: "Sunrun",
    logoUrl: "/sunrun_logo.svg.png",
    altText: "Sunrun Logo"
  },
  {
    name: "Loom Solar",
    logoUrl: "/loom_solar_logo.png.png",
    altText: "Loom Solar Logo"
  },
  {
    name: "CanadianSolar",
    logoUrl: "/CS-LOGO-RED-RGB-NEW-2024-W-TAG-2.png",
    altText: "Canadian Solar Logo"
  }
];

export default function BrandPatterns(){
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    
    observerRef.current = observer;
    
    return () => {
      if (observerRef.current && scrollRef.current) {
        observerRef.current.unobserve(scrollRef.current);
      }
    };
  }, []);
  
  // Auto-scrolling effect
  useEffect(() => {
    if (!scrollRef.current || isPaused) return;
    
    let scrollAmount = 0;
    const distance = 1; // pixels to move per step
    const speed = 30; // ms between steps
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    
    const scroll = () => {
      if (!scrollRef.current || isPaused) return;
      
      scrollAmount += distance;
      scrollRef.current.scrollLeft = scrollAmount;
      
      // Reset when reaching the end to create infinite loop effect
      if (scrollAmount >= scrollWidth - clientWidth) {
        scrollAmount = 0;
      }
    };
    
    const interval = setInterval(scroll, speed);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Double the brands to create a seamless looping effect
  const displayedBrands = [...brands, ...brands];
  
  return (
    <section 
      className={cn(
        "py-8 bg-background transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="wrapper px-4">
        <header className="mb-12 text-center">
          <h2 className="headline font-bold text-foreground">Our Trusted Partners</h2>
          <p className="text-muted-foreground mt-4">
            We partner with industry-leading brands to deliver high-quality solar solutions
          </p>
        </header>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex items-center gap-12 overflow-x-hidden whitespace-nowrap py-8"
          >
            {displayedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="inline-flex items-center justify-center min-w-[180px] h-20 transition-transform hover:scale-110 duration-300"
              >
                <Image 
                  src={brand.logoUrl} 
                  width={200}
                  height={150}
                  alt={brand.altText}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient Fade effect on edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};


