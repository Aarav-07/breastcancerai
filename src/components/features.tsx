"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { motion } from "framer-motion"
import { Network, FileSearch, Blend, Lightbulb, Stethoscope } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Deep Learning Analysis",
      description: "Advanced ResNet50 framework that automatically learns and detects subtle deep visual shapes in mammograms.",
      icon: <Network className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Radiomic Texture Features",
      description: "Mathematical extraction of tumor morphology and tissue density to catch hidden microcalcifications.",
      icon: <FileSearch className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Hybrid Feature Fusion",
      description: "Synergistic combination of deep features and radiomics for robust predictive performance.",
      icon: <Blend className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Explainable AI — Grad-CAM (In Progress)",
      description: "Transparent class activation maps highlighting the regions of interest that influenced a diagnosis.",
      icon: <Lightbulb className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Clinical Decision Support",
      description: "An intuitive interface serving as a second pair of eyes, enhancing rather than replacing clinician judgment.",
      icon: <Stethoscope className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-3",
    },
  ]

  return (
    <section id="features" className="py-24 bg-pink-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Intelligent Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our fusion architecture powers the next generation of explainable oncological support tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group hover:z-10 relative ${feature.colSpan}`}
            >
              <Card className="h-full bg-white/70 backdrop-blur-md border border-pink-100 hover:border-pink-300 transition-all duration-300 overflow-hidden group-hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10 p-8">
                  <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 text-slate-800">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
