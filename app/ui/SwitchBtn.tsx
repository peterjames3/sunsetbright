'use client';
import { useState } from 'react';
import clsx from 'clsx';

export default function SwitchBtn(){
    const [isActive, setIsActive] = useState(false);

     const handleClick = ()=>{
        setIsActive(!isActive);
     }

    return(
        <button
        type="button"
        onClick={handleClick}
        className={clsx(
          'px-4 lg:text-sm text-[0.79rem] font-semibold rounded-sm transition-all delay-300 hover:cursor-pointer py-3 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary',
          isActive
            ? 'bg-foreground text-background' // Active state styles
            : 'bg-primary text-foreground hover:bg-foreground hover:text-background' // Inactive state styles
        )}
      >
        Switch To Solar
      </button>
    )
}