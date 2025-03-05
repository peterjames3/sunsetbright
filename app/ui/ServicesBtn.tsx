"use client";
import { useState } from "react";
import clsx from "clsx";

export default function ServicesBtn() {
    const [isServicesActive, setIsServicesActive] = useState(false);


  return (
    <div className=" ">
  
      {/* Explore Our Services Button */}
      <button
        type="button"
        onClick={() => setIsServicesActive(!isServicesActive)}
         className={clsx(
                 'px-4 lg:text-sm text-[0.79rem] font-semibold rounded-sm transition-all delay-300 hover:cursor-pointer py-3 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary',
                 isServicesActive
                   ? 'bg-foreground text-background' // Active state styles
                   : 'bg-primary text-foreground hover:bg-foreground hover:text-background' // Inactive state styles
               )}
      >
        Explore Our Services
      </button> 
    </div>
  );
}
