import { BentoGrid, BentoGridItem } from "@/app/ui/Bento-Grid";
import {
    IconHome, 
    IconSun, 
    IconSettings, 
    IconBolt, 
    IconPlugConnected, 
    IconBattery, 
    IconRecharging,
  } from "@tabler/icons-react";
  import image1 from '@/public/Silhouetted backlighting, extreme macro close-up. Solar-powered water pump system in rural Kenya.jpg'

export default function Solutions() {
  return (
    <section className='w-full bg-foreground py-8'>
         <header className='wrapper flex flex-col gap-3'>
                <div className='flex items-center gap-4  '>
                 <div className='h-6 w-[2px] bg-primary'></div>
                 <div>
                 <h2 className='headline font-bold text-background'>Our Solar Solutions </h2>
                 </div>
                    
                </div>
              <h3 className='title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent'>  Power your home and business with our reliable, high-efficiency solar solutions.</h3>
            </header>
    <BentoGrid className="wrapper">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.src}
          alt ={item.alt}
          header={item.header}
          icon={item.icon}
          href={item.href}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Residential Solar Solutions",
    description: "Efficient and cost-saving solar systems tailored for homes.",
    src: image1,
    alt: "Technician installing solar panels",
    header: <Skeleton />,
    icon: <IconHome className="size-4 text-primary" />,
    href: "/services",

  },
  {
    title: "Solar Water Heating",
    description: "Sustainable and energy-efficient hot water solutions using solar technology.",
    src: "/Solar panels on rooftops of small homes and businesses. A technician works on a panel.jpg",
    alt: "Technician installing solar panels",
    //header: <Skeleton />,
    icon: <IconSun className="size-4 text-primary" />,
    href: "/services/solar-water-heating",
  },
  {
    title: "Custom Energy Solutions",
    description: "Tailored solar energy systems for residential, commercial, and industrial needs.",
    src: "/Silhouetted backlighting, extreme macro close-up. Solar-powered water pump system in rural Kenya.jpg",
    alt: "Solar farm installation",
    //header: <Skeleton />,
    icon: <IconSettings className="size-4 text-primary" />,
    href: "/services/custom-energy",
  },
  {
    title: "Electrical Design, Electrical Installation and Power Metering",
    description: "Expert design, installation, and maintenance of electrical systems.",
    src: "/High-angle view of a home with solar panels at sunset.jpg",
    alt: "Solar panels on residential home",
    //header: <Skeleton />,
    icon: <IconPlugConnected className="size-4 text-primary" />,
    href: "/services/electrical-infrastructure",
  },
  {
    title: "Solar Energy Consultation",
    description: "Reliable solar power solutions for remote locations and independent energy needs.",
    src: "/A solar panel installation.jpg",
    alt: "Solar panel installation with technician on rooftop overlooking rural landscape",
    //header: <Skeleton />,
    icon: <IconBolt className="size-4 text-primary" />,
    href: "/services/off-grid-solar",
  },
  {
    title: "Solar Installation",
    description: "Advanced battery storage for uninterrupted solar power supply.",
    src: "/A solar panel installation.jpg",
    alt: "Solar panel installation with technician on rooftop overlooking rural landscape",
   // header: <Skeleton />,
    icon: <IconBattery className="size-4 text-primary" />,
    href: "/services/energy-storage",
  },
  {
    title: "CCTV, Electric Fence and  Alarms Installation",
    description: "Fast and efficient solar-powered charging for electric vehicles.",
    src: "/A solar panel installation.jpg",
    alt: "Solar panel installation with technician on rooftop overlooking rural landscape",
    //header: <Skeleton />,
    icon: <IconRecharging className="size-4 text-primary" />,
    href: "/services/energy-storage",
  },
];