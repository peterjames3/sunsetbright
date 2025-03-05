"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"


interface CarouselImage {
  src: string
  alt: string
}

interface SolarCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
  backgroundColor?: string
}

export default function SolarCarousel({
  images,
  autoPlayInterval = 5000,

}: SolarCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle autoplay
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(goToNext, autoPlayInterval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, autoPlayInterval, goToNext])

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
  

      {/* Foreground image container */}
      <div className="relative h-[400px] md:h-[650] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out p-2 md:p-4 lg:p-8 ${
              index === currentIndex ? "opacity-100 z-4" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-[380px] md:h-[550px] overflow-hidden rounded-bl-[80px] rounded-tr-[80px]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

     
      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button type='button'
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-600/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

