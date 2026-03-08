"use client"

import { Card } from "./ui/card"
import { motion } from "framer-motion"
import { ScanSearch, Shield, Clock, FlaskConical } from "lucide-react"

export function ExplainableAI() {
  return (
    <section id="demo" className="py-24 bg-pink-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              See the Invisible. <br />
              <span className="text-[#EC4899]">Know the Why.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Unlike traditional black-box AI models that merely output a probability score, 
              our Fusion framework provides structural reasoning. Using <strong>Grad-CAM heatmaps (In Progress)</strong>, 
              the model highlights the exact micro-textures acting as the predictive foundation, 
              establishing clinician trust and clear diagnosis paths.
            </p>
            
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <ScanSearch className="w-6 h-6 text-[#EC4899]" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Visual Grounding</h4>
                <p className="text-slate-500 text-sm">Colored overlay reveals model focus</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Shield className="w-6 h-6 text-[#EC4899]" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Clinical Verification</h4>
                <p className="text-slate-500 text-sm">Empowering doctors, not replacing them.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-500 blur-3xl opacity-20 -z-10 rounded-[3rem]"></div>
            <Card className="p-4 md:p-8 bg-white shadow-2xl overflow-hidden rounded-[2rem] border-transparent relative">
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-amber-700">Under Progress</span>
                </div>
              </div>

              {/* Under Progress State */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-pink-50/50 border-2 border-dashed border-pink-200 flex flex-col items-center justify-center gap-6 p-6">

                {/* Animated pulsing rings */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-24 h-24 rounded-full bg-pink-300/40"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="absolute w-16 h-16 rounded-full bg-pink-400/50"
                  />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-[#BE185D] flex items-center justify-center shadow-lg shadow-pink-400/40">
                    <FlaskConical className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Grad-CAM Visualisation <span className="text-amber-500 text-sm font-medium">(In Progress)</span></h4>
                  <p className="text-slate-500 text-sm max-w-[220px] leading-relaxed">
                    Heatmap generation module is currently being trained and validated.
                  </p>
                </div>

                {/* Animated progress bar */}
                <div className="w-full max-w-[240px]">
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> In Development</span>
                    <span className="text-pink-500 font-semibold">~72%</span>
                  </div>
                  <div className="h-2 w-full bg-pink-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "72%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-pink-400 to-[#EC4899]"
                    />
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
