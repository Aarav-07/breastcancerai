"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { ShieldAlert, Activity, AlertCircle } from "lucide-react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

function ProblemCard({ problem, progress, start, end }: { problem: any, progress: MotionValue<number>, start: number, end: number }) {
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [50, 0])
  const scale = useTransform(progress, [start, end], [0.9, 1])

  return (
    <motion.div style={{ opacity, y, scale }} className="h-full">
      <Card className="h-full bg-slate-50 border-transparent hover:border-pink-200 transition-colors shadow-none hover:shadow-xl hover:-translate-y-1">
        <CardHeader>
          <div className="p-3 bg-pink-100 rounded-2xl w-fit mb-4">
            {problem.icon}
          </div>
          <CardTitle className="text-xl mb-2">{problem.title}</CardTitle>
          <CardDescription className="text-base leading-relaxed text-slate-600">
            {problem.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

export function Problem() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const problems = [
    {
      title: "Diagnostic Challenges",
      description: "Manual interpretation of medical data and imaging is challenging due to subtle patterns and complex tissue variations that are easy to miss.",
      icon: <AlertCircle className="w-10 h-10 text-[#EC4899] mb-4" strokeWidth={1.5} />,
    },
    {
      title: "Need for Precision",
      description: "Subtle abnormalities often remain hidden within dense breast tissues, requiring advanced tools that go beyond the surface.",
      icon: <Activity className="w-10 h-10 text-[#EC4899] mb-4" strokeWidth={1.5} />,
    },
    {
      title: "Early Detection Crucial",
      description: "Breast cancer is a leading health concern globally, making early and accurate detection the most powerful tool for survival.",
      icon: <ShieldAlert className="w-10 h-10 text-[#EC4899] mb-4" strokeWidth={1.5} />,
    },
  ]

  return (
    <section id="about" ref={containerRef} className="w-full bg-white relative h-[250vh]">
      <div className="md:sticky top-0 w-full md:h-screen flex flex-col justify-start pt-16 md:pt-[10vh] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
              The Diagnostics Gap
            </h2>
            <p className="text-lg text-slate-600">
              Why AI-assisted medical data analysis is crucial for modern healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, i) => {
              // Calculate stagger ranges (0.15 chunks from 0 to 0.45)
              const start = i * 0.2;
              const end = start + 0.25;
              return (
                <ProblemCard 
                  key={problem.title} 
                  problem={problem} 
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
