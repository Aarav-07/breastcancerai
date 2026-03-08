"use client"

import { Card } from "./ui/card"
import { motion } from "framer-motion"
import { Linkedin, Github, Mail } from "lucide-react"

export function Team() {
  const team = [
    {
      name: "Drishti Verma",
      role: "AI/ML Researcher",
      initials: "DV"
    },
    {
      name: "Arush Pradhan",
      role: "Full Stack Engineer",
      initials: "AP"
    },
    {
      name: "Aarav Parikh",
      role: "System Architect",
      initials: "AP"
    },
  ]

  return (
    <section id="team" className="py-24 bg-pink-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Meet the Researchers
          </h2>
          <p className="text-lg text-slate-600">
            Dedicated to pushing the boundaries of medical AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
             <motion.div
               key={member.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
             >
                <Card className="text-center p-8 bg-white shadow-xl shadow-pink-100/40 border border-pink-100 hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-pink-300 to-[#EC4899] p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#BE185D]">
                      {member.initials}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-[#EC4899] font-medium text-sm mb-6">{member.role}</p>
                  
                  <div className="flex justify-center gap-4 text-slate-400">
                    <button className="hover:text-[#EC4899] transition-colors"><Linkedin className="w-5 h-5" /></button>
                    <button className="hover:text-[#EC4899] transition-colors"><Github className="w-5 h-5" /></button>
                    <button className="hover:text-[#EC4899] transition-colors"><Mail className="w-5 h-5" /></button>
                  </div>
                </Card>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
