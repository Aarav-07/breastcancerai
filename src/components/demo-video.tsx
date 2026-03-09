"use client"

import Image from "next/image"
import { Card } from "./ui/card"
import { motion } from "framer-motion"

export function DemoVideo() {
  return (
    <section id="demo" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Model Evaluation Results
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg pt-2">
            Tested on the CBIS-DDSM dataset. The ROC curve below demonstrates the model&apos;s
            diagnostic discrimination — achieving an AUC of <strong className="text-[#EC4899]">0.7927</strong> on the validation set,
            with a validation accuracy of <strong className="text-[#EC4899]">72.46%</strong> and a BI-RADS task accuracy of <strong className="text-[#EC4899]">62.60%</strong>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border-2 border-pink-100 shadow-[0_0_50px_-12px_rgba(236,72,153,0.25)] bg-white p-4 md:p-8 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/50 to-white/5 opacity-50 pointer-events-none rounded-3xl"></div>

            <div className="relative rounded-2xl overflow-hidden bg-white flex items-center justify-center">
              <div className="w-full max-w-[500px] mx-auto">
                <Image
                  src="/WhatsApp Image 2026-03-09 at 5.27.20 AM.jpeg"
                  alt="ROC Curve - Breast Cancer Detection (AUC = 0.7927)"
                  width={900}
                  height={640}
                  className="w-full h-auto rounded-2xl object-contain"
                  priority
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-6 border-t border-pink-100 pt-6">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-[#EC4899]">0.7927</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Validation AUC</p>
              </div>
              <div className="text-center border-l border-pink-100">
                <p className="text-2xl font-extrabold text-[#EC4899]">72.46%</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Val. Accuracy</p>
              </div>
              <div className="text-center border-l border-pink-100">
                <p className="text-2xl font-extrabold text-[#EC4899]">62.60%</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">BI-RADS Accuracy</p>
              </div>
              <div className="text-center border-l border-pink-100">
                <p className="text-2xl font-extrabold text-[#EC4899]">10k+</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Images Tested</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
