"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, AlignJustify } from "lucide-react";
import clsx from 'clsx';
import SwitchBtn from "./SwitchBtn";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const Menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      {/* Hamburger Icon */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          title="hamburger open icon"
          className="hover:cursor-pointer transition-all delay-300 bg-foreground/20   p-2 rounded-full"
        >
          <AlignJustify />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          title="hamburger close icon"
          className="hover:cursor-pointer transition-all delay-300 bg-foreground/20   p-2 rounded-full"
        >
          <X />
        </button>
      )}

      {/* Mobile Menu Overlay and Content */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-1/2 bg-background z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col py-6">
          {Menu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                "px-6 py-3 text-tertiary hover:text-primary hover:bg-gray-50",
                pathname === item.href && "text-primary font-semibold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='w-full flex justify-start items-center px-3'>
        <SwitchBtn />
        </div>
 
      </div>
    </div>
  );
}