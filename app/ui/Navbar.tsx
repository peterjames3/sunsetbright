"use client";
import clsx from "clsx";
//import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Mobile from "@/app/ui/Mobile";
import Image from "next/image"
import SwitchBtn from "./SwitchBtn";
import { MailCheck, PhoneCall, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Navbar() {
  //const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const Menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products"},
    // { name: "Solar Installation", href: "/solarinstallation" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog",  href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="w-full shadow-sm py-6 flex flex-col gap-2 fixed top-0 z-50 bg-background ">
       {/* Contact information section */}
       <section className=" w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] px-4 md:px-0 sm:flex items-center justify-between ">
        <address className=" flex items-center gap-6 text-p-sm sm:text-p-md md:text-p-lg">
          <div className="flex gap-2  hover:text-secondary transition-colors delay-100 items-center text-foreground">
          <MailCheck />
            <a href="mailto:sunsetbrightenergylimited@gmail.com">sunsetbrightenergylimited@gmail.com</a>
          </div>
          <div className="flex gap-2 hover:text-secondary transition-colors delay-100 items-center text-foreground">
          <PhoneCall />
            <a href="tel:+254768283966">+254  716 783432</a>
          </div>
        </address>
        {/* Social media links */}
        <nav aria-label="Social Media Links" className="hidden md:flex text-2xl gap-5 text-foreground">
          <Link  href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className=" hover:text-orange-500  transition-colors delay-300" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className=" hover:text-blue-600  transition-colors delay-300" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter />
          </Link>
        </nav>
      </section>
      

      {/* Ensure the navbar container has the same width as the body */}
      <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] flex items-center justify-between gap-6 px-4 md:px-0 ">
        <nav className="font-bold text-[1.2rem] lg:text-[1.5rem]">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            {/* Solar<span className="text-primary">TechDigest</span> */}
             <Image
             src='/favicon-32x32.png'
             alt='sunsetBright logo'
             height={30}
             width={30}
             priority={true}
             className='object-contain'/>
             <nav ><span className=' text-foreground'>Sunset</span><span className="text-primary">Bright</span>.</nav>
          </Link>
        </nav>

        <div className="hidden md:flex">
          <nav className="flex sm:gap-2 md:gap-5">
            {Menu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={clsx(
                  "sm:text-[0.68rem] md:text-[0.99rem] font-medium hover:text-primary",
                  item.href === pathname && "text-primary font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex">
            <SwitchBtn />
        </div>

        <div className="flex md:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
}