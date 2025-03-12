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
    <section id='solutions' className='w-full bg-foreground py-8'>
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
    title: "Solar Installation",
    description: "Efficient and cost-saving solar systems tailored for homes.",
    src: '/A solar panel installation.webp',
    alt: "Technician installing solar panels",
    header: <Skeleton />,
    icon: <IconHome className="size-4 text-primary" />,
    href: "/services",

  },
  {
    title: "Solar Water Heating",
    description: "Sustainable and energy-efficient hot water solutions using solar technology.",
    src: "/A modern solar water heater.webp",
    alt: "A modern solar water heater",
    //header: <Skeleton />,
    icon: <IconSun className="size-4 text-primary" />,
    href: "/services/solar-water-heating",
  },
  {
    title: "Electrical Design",
    description: "Tailored solar energy systems for residential, commercial, and industrial needs.",
    src: "/A professional electrical wiring diagram for a residential building, showing lighting circuits, power outl.webp",
    alt: "A professional electrical wiring diagram for a residential building, showing lighting circuits",
    //header: <Skeleton />,
    icon: <IconSettings className="size-4 text-primary" />,
    href: "/services/custom-energy",
  },
  {
    title: "Electrical Installation",
    description: "Expert design, installation, and maintenance of electrical systems.",
    src: "/an electrical inspector in safety gear conducting an electrical audit in a large meter box.webp",
    alt: "electrical inspector in safety gear conducting an electrical audit. ",
    //header: <Skeleton />,
    icon: <IconPlugConnected className="size-4 text-primary" />,
    href: "/services/electrical-infrastructure",
  },
  {
    title: "Solar Water Pump",
    description: "Reliable solar power solutions for remote locations and independent energy needs.",
    src: "/A modern solar water heater.webp",
    alt: "Solar panel installation with technician on rooftop overlooking rural landscape",
    //header: <Skeleton />,
    icon: <IconBolt className="size-4 text-primary" />,
    href: "/services/off-grid-solar",
  },
  {
    title: " Power Metering",
    description: "Advanced battery storage for uninterrupted solar power supply.",
    src: "/power meter.webp",
    alt: "Image of a power meter",
   // header: <Skeleton />,
    icon: <IconBattery className="size-4 text-primary" />,
    href: "/services/energy-storage",
  },
  {
    title: "CCTV, Electric Fence and  Alarms Installation",
    description: "Fast and efficient solar-powered charging for electric vehicles.",
    src: "/motion 1.webp",
    alt: "image of a Burglar alarm",
    //header: <Skeleton />,
    icon: <IconRecharging className="size-4 text-primary" />,
    href: "/services/energy-storage",
  },
];