"use client"

import { Card } from "./ui/card"
import { motion } from "framer-motion"
import { Upload, Cpu, ShieldCheck, Eye, ArrowDown } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Upload Mammogram",
      description: "Securely input the imaging data directly into the system.",
      icon: <Upload className="w-6 h-6 text-white" />,
    },
    {
      id: "02",
      title: "Image Processing",
      description: "Enhancement and isolation to highlight pertinent tissues.",
      icon: <Eye className="w-6 h-6 text-white" />,
    },
    {
      id: "03",
      title: "Feature Extraction",
      description: "Simultaneous deep neural network and radiomic assessments.",
      icon: <Cpu className="w-6 h-6 text-white" />,
    },
    {
      id: "04",
      title: "AI Prediction",
      description: "Synthesized data is fused to provide highly accurate likelihood scores.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <section id="workflow" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Intelligent Workflow
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From scan to insights, every step is optimized for precision.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-100 via-pink-300 to-pink-100 -translate-x-1/2"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:w-auto p-4 md:p-8">
                    <Card
                      className={`relative group bg-white border border-pink-100/50 shadow-lg shadow-pink-100/30 hover:shadow-2xl hover:-translate-y-2 transition-all p-6 md:p-8 text-${
                        isEven ? "left md:text-left" : "left md:text-right"
                      }`}
                    >
                      <span className="absolute top-4 right-4 md:static md:mb-4 md:inline-block text-4xl font-black text-pink-50">{step.id}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </Card>
                  </div>

                  <div className="flex-shrink-0 my-4 md:my-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F472B6] to-[#EC4899] shadow-lg shadow-pink-500/40 text-white z-10 transform ring-4 ring-white relative">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }}>
                      {step.icon}
                    </motion.div>
                  </div>

                  <div className="flex-1 w-full md:p-8 hidden md:block"></div>
                </motion.div>
              )
            })}

            {/* Final Step Centered */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="pt-12 flex justify-center mt-12 relative"
            >
                <Card className="max-w-md w-full text-center p-8 bg-gradient-to-br from-pink-500 to-[#BE185D] text-white border-none shadow-[0_20px_50px_-15px_rgba(236,72,153,0.6)]">
                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                        <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">5. Explainable Heatmap</h3>
                    <p className="text-white/80">
                        The final output includes a Grad-CAM (In Progress) overlay that visually grounds the prediction, showing clinicians exactly where the model is looking.
                    </p>
                </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
