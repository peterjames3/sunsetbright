"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "solar-full", label: "Full Solar Installation" },
  { id: "solar-hybrid", label: "Hybrid Solar System" },
  { id: "solar-grid", label: "Grid-Tied System" },
  { id: "security-cctv", label: "CCTV Surveillance" },
  { id: "security-fence", label: "Electric Fence" },
  { id: "security-alarm", label: "Alarm Systems" },
];

type ContentData = {
  [key: string]: {
    title: string;
    description: string;
    components: string[];
    benefits: string[];
    idealFor: string;
    image: string;
  };
};

const contentData: ContentData = {
  "solar-full": {
    title: "Full Solar Power Installation",
    description:
      "Achieve complete independence from the grid with a full solar system installation, a perfect choice for those seeking to transition to solar energy.",
    components: ["Solar panels", "Batteries", "Inverter", "Control system"],
    benefits: ["100% energy independence", "Full power security", "Long-term savings"],
    idealFor: "Homes and businesses seeking total energy independence",
    image: "/warm golden.jpg",
  },
  "solar-hybrid": {
    title: "Hybrid Solar System",
    description:
      "A combination of solar and grid power with battery storage, ensuring backup during power outages.",
    components: ["Solar panels", "Battery storage", "Grid connection"],
    benefits: ["Reduced electricity costs", "Works during outages", "Balanced energy supply"],
    idealFor: "Homes and businesses needing backup power and energy savings",
    image: "/Surreal infrared.jpg",
  },
  "solar-grid": {
    title: "Grid-Tied Solar System",
    description:
      "Uses solar energy while staying connected to the grid, with the ability to sell excess power.",
    components: ["Solar panels", "Smart inverter", "Grid connection"],
    benefits: ["Lower cost (no batteries)", "Uses grid as backup", "Net metering revenue"],
    idealFor: "Properties with reliable grid access looking to reduce energy costs",
    image: "/A solar panel installation.jpg",
  },
  "security-cctv": {
    title: "CCTV Surveillance Systems",
    description:
      "24/7 security monitoring with high-definition cameras and mobile access.",
    components: ["HD cameras", "Night vision", "Remote access"],
    benefits: ["Real-time monitoring", "Motion detection", "Enhanced security"],
    idealFor: "Homes, businesses, and institutions requiring continuous surveillance",
    image: "/High-angle view of a home with solar panels at sunset.jpg",
  },
  "security-fence": {
    title: "Electric Fence Installation",
    description:
      "High-voltage security fencing with alarm integration for maximum protection.",
    components: ["High-voltage wires", "Battery backup", "Alarm system"],
    benefits: ["Intruder deterrent", "Power backup", "Automated alerts"],
    idealFor: "Properties requiring high-security perimeter protection",
    image: "/Solar panels on rooftops of small homes and businesses. A technician works on a panel.jpg",
  },
  "security-alarm": {
    title: "Advanced Alarm Systems",
    description:
      "Advanced alarm systems for homes and businesses, with instant intrusion alerts.",
    components: ["Motion sensors", "Control panel", "Mobile app"],
    benefits: ["Quick emergency response", "Smart home integration", "24/7 protection"],
    idealFor: "Homeowners and businesses needing immediate security alerts",
    image: "/Silhouetted backlighting, extreme macro close-up. Solar-powered water pump system in rural Kenya.jpg",
  },
};

export default function SolarSecurityTabs() {
  const [activeTab, setActiveTab] = useState("solar-full");

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex flex-wrap md:flex-nowrap md:gap-0 space-x-4  gap-5 border-b pb-3">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={`pb-2 px-4 label-text hover:cursor-pointer transition-all delay-300 ${
              activeTab === tab.id ? "border-b-1 border-tertiary font-bold" : "text-foreground font-semibold"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content with Animation */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
      >
        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-bold">{contentData[activeTab].title}</h3>
          <p className="text-gray-600 mt-2">{contentData[activeTab].description}</p>

         

          <h4 className="mt-4 font-semibold">Key Components:</h4>
          <ul className="list-disc ml-5 text-gray-700">
            {contentData[activeTab].components.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>

          <h4 className="mt-4 font-semibold">Benefits:</h4>
          <ul className="list-disc ml-5 text-gray-700">
            {contentData[activeTab].benefits.map((item, index) => (
              <li key={index}>✔️ {item}</li>
            ))}
          </ul>
          <div className=' bg-tertiary-white rounded-sm p-3 mt-4'>
          <h3 className="font-semibold text-primary">Ideal For:</h3>
          <p className="text-background">{contentData[activeTab].idealFor}</p>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <motion.img
            src={contentData[activeTab].image}
            alt={contentData[activeTab].title}
            height={500}
            className="rounded-lg shadow-lg h-[28rem] w-full "
            initial={{ opacity: 0.7, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
