"use client"

import Link from "next/link"
import { Activity, Github, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300 relative border-t-4 border-[#EC4899]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F9A8D4] via-[#EC4899] to-[#BE185D]"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 text-white inline-flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EC4899] p-2 text-white shadow-lg">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold tracking-tight text-xl">
                Detection of <span className="text-[#EC4899]">Breast Cancer</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Adaptive Hybrid Deep-Radiomic Feature Fusion System for Explainable Breast Cancer Detection.
            </p>
            <p className="text-sm text-slate-500">
               Manipal University Jaipur (2025-2026)<br />
               Department of AI & ML
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
               <li><a href="#about" className="hover:text-[#EC4899] transition-colors">About the Project</a></li>
               <li><a href="#features" className="hover:text-[#EC4899] transition-colors">Intelligent Features</a></li>
               <li><a href="#workflow" className="hover:text-[#EC4899] transition-colors">How it Works</a></li>
               <li><a href="#tech" className="hover:text-[#EC4899] transition-colors">Technology Stack</a></li>
               <li><a href="#team" className="hover:text-[#EC4899] transition-colors">Meet the Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
               <li>
                  <Link href="https://github.com/arush-07/pbl-2" target="_blank" className="flex items-center text-sm hover:text-[#EC4899] transition-colors group">
                     <Github className="w-4 h-4 mr-2 text-slate-400 group-hover:text-[#EC4899]" />
                     GitHub Repository
                  </Link>
               </li>
               <li>
                  <Link href="https://yaxhjbdpx2c3neepbau2hd.streamlit.app/" target="_blank" rel="noreferrer" className="flex items-center text-sm hover:text-[#EC4899] transition-colors group">
                     <Globe className="w-4 h-4 mr-2 text-slate-400 group-hover:text-[#EC4899]" />
                     Live Demo App
                  </Link>
               </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
           <p>© {new Date().getFullYear()} Breast Cancer Detection Research Team. All rights reserved.</p>
           <div className="flex space-x-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  )
}
