"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Zap, Leaf, Calendar, Building2, ChevronRight, Sun, BarChart3, Users, Award } from "lucide-react"

const projects = [
  {
    title: "Commercial Solar Installation",
    image: "/Surreal infrared.jpg",
    location: "Phoenix, Arizona",
    power: "250kW",
    impact: "180t/year",
    completed: "2023",
    site: "Phoenix Tech Center",
  },
  {
    title: "Residential Community Solar",
    image: "/Warm golden.jpg",
    location: "San Diego, California",
    power: "120kW",
    impact: "85t/year",
    completed: "2024",
    site: "Sunset Heights Community",
  },
  {
    title: "Solar Farm",
    image: "/A solar panel installation.jpg",
    location: "Austin, Texas",
    power: "120kW",
    impact: "100t/year",
    completed: "2022",
    site: "Sunset Heights Community",
  },
]

const metrics = [
  {
    value: "50+",
    label: "Solar Projects Completed",
    description: "Across residential and commercial sectors",
    icon: Sun,
  },
  {
    value: "10MW",
    label: "Total Power Generated",
    description: "Clean energy production capacity",
    icon: BarChart3,
  },
  {
    value: "100+",
    label: "Happy Customers",
    description: "Satisfied clients nationwide",
    icon: Users,
  },
  {
    value: "5+",
    label: "Industry Awards",
    description: "Recognition for excellence",
    icon: Award,
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0A120E] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-1 h-6 bg-green-500"></div>
            Featured Solar Projects in Kenya
          </h2>
          <p className="text-3xl font-semibold">
            Discover how we&apos;re <span className="text-green-500">empowering businesses and communities</span>
            <br />
            with sustainable solar <span className="text-green-500">energy solutions</span>
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#0F1713] rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span>{project.power}</span>
                    <Leaf className="w-4 h-4 text-green-500 ml-2" />
                    <span>{project.impact} CO₂ reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>Completed: {project.completed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-green-500" />
                    <span>{project.site}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="bg-gradient-to-br from-[#1A2721] to-[#0F1713] p-6 rounded-lg text-center">
                <Icon className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-green-500 font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
          >
            View All Projects
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

