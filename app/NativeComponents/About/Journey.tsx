"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "motion/react"
import Image from 'next/image';

const milestones = [
  {
    title: "The Beginning",
    content:
      "Founded in 2010, SolarTech emerged from a simple yet powerful idea: that clean, renewable energy should be accessible to everyone. Our founders, driven by their passion for sustainability, started with a small team of dedicated engineers.",
  },
  {
    title: "Growth & Innovation",
    content:
      "Over the years, we've expanded our reach across the nation, pioneering new solar technologies and installation methods. Our commitment to innovation has led to breakthrough developments in solar panel efficiency and energy storage solutions.",
  },
  {
    title: "Today & Tomorrow",
    content:
      "Today, we're proud to be at the forefront of the renewable energy revolution, serving thousands of homes and businesses. Our vision for the future remains clear: a world powered by clean, sustainable energy.",
  },
]



export default function Journey() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="bg-foreground text-background py-3 min-h-screen">
      <div className="wrapper">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" headline font-bold flex items-center gap-2 mb-6"
          >
            <div className="w-1 h-6 bg-primary"></div>
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent"
          >
            From humble beginnings to industry leadership, our journey 
            
            has been driven <br/> by a singular vision: making sustainable
            
            energy accessible to all.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={ref}>
          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
            }}
            className="relative"
          >
            <Image
            src="/Overhead.jpg" 
            fill={true}
            style={{ objectFit:'cover' }}
            priority={true}
            className="object-fill  rounded-lg"
            alt="Photographer exploring an abandoned location"
             />
          </motion.div>

          {/* Milestone Cards */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.4 + index * 0.2 },
                  },
                }}
                className="bg-foregound border border-tertiary-white rounded-lg p-6 hover:border-primary transition-colors"
              >
                <h3 className="p-text font-semibold mb-3">{milestone.title}</h3>
                <p className="text-gray-400 label-text leading-relaxed">{milestone.content}</p>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 1.2 },
                },
              }}
              className="text-center pt-6"
            >
             
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

