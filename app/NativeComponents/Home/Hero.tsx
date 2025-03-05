"use client";
import Image from "next/image";
import TalkToExperts from "@/app/ui/TalkToExperts";
import ServicesBtn from "@/app/ui/ServicesBtn";
import { AnimatedTooltip } from "@/app/ui/AnimatedTooltip";
//import Button from "@/app/ui/Button";
const clientReviews = [
  {
    id: 1,
    name: "Ann G",
    designation: "Homeowner",
    image: "/clive-thibela-9kQBQqY_xrk-unsplash.jpg",
    review: "The solar panel installation was seamless, and my electricity bill has dropped significantly. Highly recommend their service!"
  },
  {
    id: 2,
    name: "Tonny O",
    designation: "CEO, GreenTech Solutions",
    image: "/elizeu-dias-2EGNqazbAMk-unsplash.jpg",
    review: "Exceptional service! The team was professional and completed the installation ahead of schedule. Our business is now powered by clean energy!"
  },
  {
    id: 3,
    name: "Lucy W",
    designation: "Business Owner",
    image: "/etty-fidele-J1jYLLlRpA4-unsplash.jpg",
    review: "A game-changer for my business. The solar system is efficient, and the savings on energy costs are remarkable!"
  },
  {
    id: 4,
    name: "Mark R",
    designation: "Property Developer",
    image: "/fortune-vieyra-xdmtQVVKibU-unsplash.jpg",
    review: "Reliable and efficient solar solutions. The team provided excellent support from consultation to installation!"
  },
  {
    id: 5,
    name: "Cathrina G",
    designation: "Homeowner",
    image: "/client2.png",
    review: "Reliable and efficient solar solutions. The team provided excellent support from consultation to installation!"
  } ,
 

];




export default function Hero() {
  return (
    <div className=" relative w-full h-screen md:h-[55rem] flex items-center gap-10 bg-gradient-to-r from-gray-600 to-gray-900">
      <div className="">
        <Image
          src="/A solar panel installation.jpg" 
          fill={true}
          style={{ objectFit:'cover' }}
          priority={true}
          className="object-fill mix-blend-overlay"
          alt="Photographer exploring an abandoned location"
        />
      </div>

      <div className="absolute top-[50%] left-1/2 text-center pt-0 md:pt-28 md:text-start transition -translate-x-1/2 -translate-y-1/2  w-full sm:max-w-[600px] md:max-w-[840px] lg:max-w-[64rem] px-5 sm:px-0 text-background gap-3 ">
   
        <h1 className=" text-3xl sm:text-4xl lg:text-6xl pb-5 font-bold sm:pb-2">
          <span className='font-extrabold underline text-primary '> Power </span>
          Your World with SunsetBright Energy Limited – Reliable Solar & Electrical Solutions.
        </h1>
        <p className=" mt-4 text-xl sm:text-2xl lg:text-3xl  pb-2">
        We specialize in solar and electrical solutions for residential and commercial clients, offering solar design, consultation, installation, and maintenance alongside electrical design, installation, power metering, CCTV, alarms, and electric fencing.


        </p>
        <div className='my-4 w-full flex justify-center md:justify-start items-center gap-5'>
        <AnimatedTooltip items={clientReviews} /> 
        </div>
     
         
          {" "}
          <div className=' my-3 flex gap-5 w-full items-center justify-center md:justify-start'>
          <ServicesBtn />
          <TalkToExperts />
          </div>
     
      
       
      </div>
    </div>
  );
}
