"use client"

import { Card } from "./ui/card"
import { motion } from "framer-motion"

export function TechStack() {
  const technologies = [
    "PyTorch",
    "ResNet50",
    "Radiomics",
    "OpenCV",
    "CBIS-DDSM Dataset",
    "Explainable AI",
    "Next.js",
    "TypeScript",
  ]

  return (
    <section id="tech" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-50 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-semibold text-[#EC4899] tracking-wider uppercase text-sm mb-3">
            Technology Stack
          </p>
          <h2 className="text-3xl font-bold text-slate-800">
            Powered by the latest advancements
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full flex items-center justify-center p-6 bg-slate-50/50 backdrop-blur-sm border border-slate-200 hover:border-pink-300 transition-colors shadow-none hover:shadow-lg group text-center cursor-default">
                <span className="font-medium text-slate-600 group-hover:text-[#EC4899] transition-colors">{tech}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
