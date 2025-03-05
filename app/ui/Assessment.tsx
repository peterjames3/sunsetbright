"use client";
import { useState } from "react";
import clsx from "clsx";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Assessment() {
    const [isServicesActive, setIsServicesActive] = useState(false);


  return (
    <div className=" ">
  
      {/* Explore Our Services Button */}
      <button
        type="button"
        onClick={() => setIsServicesActive(!isServicesActive)}
         className={clsx(
                 '  px-4 lg:text-sm text-[0.79rem] font-semibold rounded-sm transition-all delay-300 hover:cursor-pointer py-3 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary',
                 isServicesActive
                   ? 'bg-foreground text-background' // Active state styles
                   : 'bg-primary text-foreground hover:bg-foreground hover:text-background' // Inactive state styles
               )}
      >
        <Link className='flex gap-2 items-center' href='/about'>Schedule your Assessment    <ArrowUpRight /></Link>
        
      </button> 
    </div>
  );
}
