import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { DemoVideo } from "@/components/demo-video"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { ExplainableAI } from "@/components/explainable-ai"
import { TechStack } from "@/components/tech-stack"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth selection:bg-pink-200">
      <Navbar />
      <Hero />
      <Problem />
      <DemoVideo />
      <Features />
      <HowItWorks />
      <ExplainableAI />
      <TechStack />
      <Team />
      <Footer />
    </main>
  )
}
