"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'motion/react';

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  if (!items) {
    console.error("🚨 AnimatedTooltip: items prop is missing!");
    return null;
  }

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex items-center gap-2 ">
      <div className="flex -space-x-4">
        {items.slice(0, 6).map((item) => ( // Show only 3 reviews
          <div
            className="relative group"
            key={item.id}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{ translateX: translateX, rotate: rotate }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center rounded-md bg-black text-white shadow-xl px-4 py-2"
                >
                  <span className="font-bold text-sm">{item.name}</span>
                  <span className="text-xs">{item.designation}</span>
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full h-14 w-14 border-2 border-white group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* "30+ Reviews" Indicator */}
      <div className="text-background text-sm font-semibold">
        ⭐ 50+ Satisfied Customers
      </div>
    </div>
  );
};
