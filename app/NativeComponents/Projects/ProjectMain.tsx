"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Zap, Leaf, Calendar, Building2 } from "lucide-react";

const projects = [
  {
    title: "Commercial Solar Installation",
    image: "/Surreal infrared.jpg",
    location: "Nairobi, Kenya",
    power: "250kW",
    impact: "180t/year",
    completed: "2023",
    site: "Akira Ridge Kilimani",
  },
  {
    title: "Residential Community Solar",
    image: "/Warm golden.jpg",
    location: "Othaya, Nyeri",
    power: "120kW",
    impact: "85t/year",
    completed: "2024",
    site: "Homeowner",
  },
  {
    title: "Solar Farm",
    image: "/A solar panel installation.jpg",
    location: "Mutha Farm",
    power: "120kW",
    impact: "100t/year",
    completed: "2022",
    site: "Farmowner",
  },
  {
    title: "Institutional Solar Installation",
    image: "/A solar panel installation.jpg",
    location: "JKUAT",
    power: "600kW",
    impact: "150t/year",
    completed: "2020",
    site: "JKUAT",
  },
  {
    title: "Residential Solar Installation",
    image: "/A solar panel installation.jpg",
    location: "Machakos",
    power: "170kW",
    impact: "100t/year",
    completed: "2017",
    site: "Homeowner",
  },
  {
    title: "Institutional Solar installation",
    image: "/A solar panel installation.jpg",
    location: "Limuru Technical",
    power: "220kW",
    impact: "100t/year",
    completed: "2023",
    site: "Limuru Technical",
  },
];

export default function ProjectMain() {
  return (
    <section className="bg-foreground text-background py-16 px-4">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="headline font-bold flex items-center gap-2">
            <div className="w-1 h-6 bg-primary"></div>
            Some Of Our Solar Projects in Kenya
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-tertiary rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-4">
                <h3 className="p-text font-semibold">{project.title}</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex label-text items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="label-text flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="size-4 text-primary" />
                      <span>{project.power}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="size-4 text-primary ml-2" />
                      <span>{project.impact} CO₂ reduction</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex label-text items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    <span>Completed: {project.completed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-primary" />
                    <span>{project.site}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
