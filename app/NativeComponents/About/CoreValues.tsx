'use client';

import { motion } from "motion/react"
import { Lightbulb, BarChart3, Users, Leaf } from "lucide-react"


const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries in solar technology",
  },
  {
    icon: BarChart3,
    title: "Excellence",
    description: "Delivering superior results",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Protecting our planet's future",
  },
]

export default function CoreValues() {
  return (
    <section className="py-8">
      <div className="wrapper">
        {/* Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="headline text-forefround font-semibold flex items-center gap-2 mb-4"
          >
            <div className="w-1 h-6 bg-primary"></div>
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="title font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent "
          >
            Your journey to sustainable energy is simpler than you think. Here  are the key <br/> steps that make it easier for
            you.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center group transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-tertiary flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-green-700" />
                </div>
                <h3 className="text-xl text-foreground font-semibold mb-2">{value.title}</h3>
                <p className="text-textColor/60">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
       
        </motion.div>
      </div>
    </section>
  )
}

