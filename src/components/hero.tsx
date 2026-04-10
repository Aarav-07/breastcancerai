"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 translate-y-[-20%] w-[800px] h-[800px] rounded-full bg-pink-100/50 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-200/40 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[800px]"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-pink-200 bg-pink-50/50 px-3 py-1 text-sm font-medium text-pink-700 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-pink-500 mr-2 animate-pulse"></span>
            Breakthrough in Breast Cancer Screening
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            AI-Powered Early <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#F472B6]">
              Breast Cancer Detection
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Technology with a Touch of Care: Smarter Early Detection. 
            An AI-powered assistant designed to support radiologists in identifying 
            subtle patterns with transparency and precision.
          </p>
          
          <div className="flex items-center justify-center">
            <Button size="lg" asChild className="h-14 rounded-full text-base shadow-xl shadow-pink-500/20 group px-10">
              <Link href="https://yaxhjbdpx2c3neepbau2hd.streamlit.app/" target="_blank" rel="noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
