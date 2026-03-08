"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { ShieldAlert, Activity, Eye, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Problem() {
  const problems = [
    {
      title: "Diagnostic Challenges",
      description: "Manual mammogram interpretation is challenging due to subtle patterns and complex tissue variations that are easy to miss.",
      icon: <AlertCircle className="w-10 h-10 text-[#EC4899] mb-4" strokeWidth={1.5} />,
      delay: 0.1,
    },
    {
      title: "Need for Precision",
      description: "Subtle abnormalities often remain hidden within dense breast tissues, requiring advanced tools that go beyond the surface.",
      icon: <Activity className="w-10 h-10 text-[#EC4899] mb-4" strokeWidth={1.5} />,
      delay: 0.2,
    },
    {
      title: "Early Detection Crucial",
      description: "Breast cancer is a leading health concern globally, making early and accurate detection the most powerful tool for survival.",
      icon: <ShieldAlert className="w-10 h-10 text-[#EC4899] mb-4" strokeWidth={1.5} />,
      delay: 0.3,
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            The Diagnostics Gap
          </h2>
          <p className="text-lg text-slate-600">
            Why AI-assisted mammogram analysis is crucial for modern healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: problem.delay }}
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
