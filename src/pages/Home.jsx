import StarBackground from "@/components/StarBackground"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import About from "@/components/About"
import SkillsSection from "@/components/SkillsSection"
import Themetoggle from "@/components/ThemeToggle"
import ProjectSection from "@/components/ProjectSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle */}
        <Themetoggle/>

        {/* Background Effects */}
        <StarBackground/>
        
        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}
        <main>
            <HeroSection/>
            <About/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>
  )
}
