"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { Network, FileSearch, Blend, Lightbulb, Stethoscope } from "lucide-react"

// A helper component to handle individual feature scroll mapping
function FeatureCard({ feature, progress, start, end }: { feature: any, progress: MotionValue<number>, start: number, end: number }) {
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [50, 0])
  const scale = useTransform(progress, [start, end], [0.9, 1])

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`group hover:z-10 relative ${feature.colSpan}`}
    >
      <Card className="h-full bg-white/70 backdrop-blur-md border border-pink-100 hover:border-pink-300 transition-all duration-300 overflow-hidden shadow-[0_20px_50px_-12px_rgba(236,72,153,0.1)] group-hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <CardHeader className="relative z-10 p-4 md:p-5">
          <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <CardTitle className="text-lg mb-1.5 text-slate-800">{feature.title}</CardTitle>
          <CardDescription className="text-sm text-slate-600 leading-relaxed">
            {feature.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

export function Features() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const features = [
    {
      title: "Deep Learning Analysis",
      description: "Advanced ResNet50 framework that automatically learns and detects subtle deep visual shapes in medical imaging data.",
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
      title: "Hybrid Diagnostic Mode",
      description: "Upload both clinical data and mammograms simultaneously for a synthesized analysis with significantly higher predictive accuracy.",
      icon: <Blend className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Clinical Decision Support",
      description: "An intuitive interface serving as a second pair of eyes, enhancing rather than replacing clinician judgment.",
      icon: <Stethoscope className="w-8 h-8 text-[#EC4899]" />,
      colSpan: "col-span-1 md:col-span-2",
    },
  ]

  return (
    <section id="features" ref={containerRef} className="w-full bg-pink-50/30 relative h-[300vh]">
      <div className="md:sticky top-0 w-full md:h-screen flex flex-col justify-start pt-12 md:pt-[6vh] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-5 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2 md:mb-3">
              Intelligent Features
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Our fusion architecture powers the next generation of explainable oncological support tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {features.map((feature, i) => {
              // Calculate stagger ranges (0.1 chunks from 0 to 0.8)
              const start = i * 0.15;
              const end = start + 0.2;
              return (
                <FeatureCard 
                  key={feature.title} 
                  feature={feature} 
                  progress={scrollYProgress} 
                  start={start} 
                  end={end} 
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
