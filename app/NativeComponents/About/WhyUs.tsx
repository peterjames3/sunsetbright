"use client"

import { motion } from "motion/react";
import { Clock, Award, History, Settings, CheckCircle, CreditCard } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Expert Support",
    description:
      "Our dedicated team of solar experts is always available to answer your questions and provide assistance whenever you need it.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use only the highest quality solar panels and equipment, backed by industry-leading warranties and guarantees.",
  },
  {
    icon: History,
    title: "13+ Years Experience",
    description:
      "With over a decade of experience, we've perfected our installation process and customer service approach.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description:
      "Every installation is tailored to your specific needs, ensuring optimal performance and maximum savings.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description:
      "Our track record of 10,000+ successful installations speaks for itself, with satisfied customers across the nation.",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "We offer various financing options to make solar energy accessible and affordable for everyone.",
  },
]

export default function WhyUs() {
  return (
    <section className="bg-foreground text-background py-8">
      <div className="wrapper">
        {/* Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="headline font-semibold flex items-center gap-2 mb-4"
          >
            <div className="w-1 h-6 bg-primary"></div>
            Learn What Makes Us The Best Solar Power Company 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent"
          >
            Join thousands of satisfied customers who trust us with their solar
            energy needs.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-foreground border border-tertiary-white rounded-lg p-6 group hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary group-hover:bg-tertiary-white hover:text-background transition-colors delay-300">
                    <Icon className="size-6 text-foreground group-hover:text-background delay-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-background/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

