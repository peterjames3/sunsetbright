"use client";
import { useState } from "react";
import clsx from "clsx";

export default function TalkToExperts() {
  const [isExpertActive, setIsExpertActive] = useState(false);

  const handleClick = ()=>{
    setIsExpertActive(!isExpertActive)
 }


  return (
    <div className="">
      {/* Talk to an Expert Button */}
      <button
        type="button"
        onClick={handleClick}
         className={clsx(
                 'px-6 lg:text-sm text-[0.79rem] border-2 border-primary font-semibold rounded-sm transition-all delay-300 hover:cursor-pointer py-3 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary',
                 isExpertActive
                   ? 'bg-foreground text-background border-primary' // Active state styles
                   : "bg-transparent text-primary hover:bg-tertary hover:text-white hover:cursor-pointer"
               )}
      >
        Talk to an Expert
      </button>

  
    </div>
  );
}
