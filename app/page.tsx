"use client" 
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { projects } from "../components/projectsData";
import ProjectCard from "../components/ProjectCard";
import StarsBG from '../components/starsBG' // adjust the path if needed
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowUp,
  Star,
  Sparkles,
  ChevronDown,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [theme, setTheme] = useState("dark")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("light", savedTheme === "light")
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const [text] = useTypewriter({
  words: ['write.', 'emcee.', 'read.', 'dance.', 'run marathons.'],
  loop: true,
  typeSpeed: 80,
  deleteSpeed: 50,
  delaySpeed: 1200,
})


  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setShowScrollTop(typeof window.scrollY === "number" && window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const projects = [
    {
      title: "Loan Eligibility Prediction App",
      description:
        "An AI-powered desktop app that predicts loan approval using real applicant data, machine learning (Python, scikit-learn), and a user-friendly Electron JS interface.",
      image: "/loan-app.png",
      technologies: ["Electron JS", "Python", "scikit-learn", "matplotlib"],
      github: "https://github.com/subhascodes/Loan-Eligibilty-App",
    },
    {
      title: "SkillForge",
      description:
        "A gamified platform to learn coding, where I developed the AI/ML engine powering personalized learning roadmap generation using Google Gemini AI, with backend integration in Python and MongoDB.",
      image: "/skillforge.png",
      technologies: ["Google Gemini AI", "Python", "MongoDB", "Next.js", "TypeScript"],
      github: "https://github.com/subhascodes/SkillForge",

    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a component-based architecture and custom hooks to showcase projects and skills.(Yes,this one!)",
      image: "/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "https://github.com/subhascodes/portfolio-website-v1",
    },
  ]

  // Custom Subhasmita Logo Component
  const SubhasmitaLogo = ({ size = "text-2xl" }: { size?: string }) => (
    <div className={`${size} font-bold relative cursor-pointer`}>
      <div className="metallic-gold-text tracking-wider font-extrabold">
        S<span className="metallic-silver-text">u</span>
        <span className="metallic-gold-text">b</span>
        <span className="metallic-silver-text">h</span>
        <span className="metallic-gold-text">a</span>
        <span className="metallic-silver-text">s</span>
        <span className="metallic-gold-text">m</span>
        <span className="metallic-silver-text">i</span>
        <span className="metallic-gold-text">t</span>
        <span className="metallic-silver-text">a</span>
      </div>
    </div> 
  )

  return (
    <div className="pt-4">
    <div className="min-h-screen bg-black text-white light:bg-gray-50 light:text-gray-900 transition-all duration-300 relative overflow-x-hidden">
    <StarsBG />
    <div className="relative min-h-screen bg-black">


      {/* Subtle Background */}
    <div className="fixed inset-0 -z-10 pointer-events-none">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1200 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ filter: "blur(80px)" }}
  >
    <ellipse cx="900" cy="200" rx="400" ry="200" fill="#facc15" fillOpacity="0.3"/>
    <ellipse cx="300" cy="600" rx="400" ry="200" fill="#60a5fa" fillOpacity="0.2"/>
    <ellipse cx="600" cy="400" rx="300" ry="150" fill="#f472b6" fillOpacity="0.15"/>
  </svg>
</div>


      {/* Navigation */}
      <div className="pt-4"></div>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 glass-morphism border-b border-yellow-400/10 light:border-gray-300/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-0.5">

          <div className="w-12 h-12 rounded-full border border-yellow-400 overflow-hidden mr-4 my-2">
  <Image
    src="/sneha.png"
    alt="Subhasmita"
    width={48}
    height={48}
    className="w-full h-full object-cover rounded-full"
  />
</div>
  

            {/* Center Logo */}

            {/* Right Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {["home", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:scale-105 relative ${
                    activeSection === item ? "metallic-gold-text" : "text-white light:text-gray-900"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-gray-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              {/*Resume Button */}
              <a
    href="https://drive.google.com/file/d/1COSelYIjqh1mbwfquaIkZ3H-C0EL7MW3/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="capitalize transition-all duration-300 hover:scale-105 relative text-white light:text-gray-900"
  >
    Resume
  </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-white hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-morphism border-t border-yellow-400/10 light:border-gray-300/20">
            <div className="px-4 py-4 space-y-4">
              {["home", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-white hover:metallic-gold-text transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              {/*Resume Button */}
              <a
    href="https://drive.google.com/file/d/1COSelYIjqh1mbwfquaIkZ3H-C0EL7MW3/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="capitalize transition-all duration-300 hover:scale-105 relative text-white light:text-gray-900"
  >
    Resume
  </a>
              
            </div>
          </div>
        )}
        <div className="absolute left-0 bottom-0 w-full h-0.5 overflow-hidden pointer-events-none rounded-b-2xl">
  <div className="moving-gold-bar h-full w-full"></div>
</div>
      </nav>

      {/* Hero Section */} 
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 mt-8">
        <div className="text-center px-4 floating-animation">
          {/*
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full relative">
              <div className="w-full h-full rounded-full metallic-border overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Subhasmita"
                  width={128}
                  height={128}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          */}

          <div className="mb-8">
            <h1 className="shiny-text">Subhasmita</h1>
            <div className="font-bold text-3xl mt-2">Beginning.</div>
          </div>

          {/*<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            <span className="metallic-silver-text">Full Stack Developer</span>
            <span className="mx-4 metallic-gold-text">&</span>
            <span className="metallic-gold-text">UI/UX Designer</span>
          </p> */}

          <p className="text-lg text-gray-400 light:text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hi there. Consider me a 20-year-old sapien who codes, builds, breaks things (and learns from it). Currently, I’m into AI-ML and web dev too. DSA interests me as much as Rohit Sharma’s sixes—yet I feel it’s not mutual (DSA doesn’t love me back). And yes, I’m beginning because it’s just the start of the things I’ve decided to achieve.
          </p>
          <p className="text-lg text-gray-400 light:text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
  What more?&nbsp;
  <span className="text-yellow-500 font-semibold">
    I {text}
    <Cursor cursorStyle="|" />
  </span>
</p>


          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button
              onClick={() => scrollToSection("projects")}
              className="metallic-gold text-black hover:scale-105 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-yellow-400 text-white bg-transparent rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>


        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-3 px-4 relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      <span className="mx-4 metallic-gold-text">Projects</span>
    </h2>

    <div className="flex flex-col items-center space-y-10 w-full">
  {projects.map((project, idx) => (
    <ProjectCard
      key={idx}
      title={project.title}
      description={Array.isArray(project.description) ? project.description : [project.description]}
      tech={project.technologies}
      github={project.github}
      image={project.image}
      index={idx}
    />
  ))}
    </div>

  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      <span className="metallic-gold-text">Tech</span>
      <span className="mx-4 metallic-silver-text">Stack</span>
    </h2>
    <div className="animate-gold-border tech-stack-container">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" title="C" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" className="tech-icon" />
      <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind CSS" title="Tailwind CSS" className="h-14 w-14 transition-transform duration-300 hover:-translate-y-2 cursor-pointer bg-black rounded" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" className="tech-icon" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" title="AWS" className="h-14 w-14 transition-transform duration-300 hover:-translate-y-2 cursor-pointer bg-black rounded" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" title="Vercel" className="tech-icon bg-white rounded" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="tech-icon" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" className="tech-icon" />
    </div>
  </div>
</section>



      {/* Contact Section */}
<section id="contact" className="py-10 px-4 relative z-10">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
      <span className="metallic-gold-text">Get In</span>
      <span className="mx-4 metallic-silver-text">Touch</span>
    </h2>

    {/* Small message on top */}
    <p className="text-center text-gray-300 light:text-gray-600 mb-12 max-w-2xl mx-auto">
      I’m ready to build, learn, and create—so if you’ve got ideas or projects, count me in! Whether it’s a question or you just want to connect, I’m always happy to hear from you. Drop a message straight to my inbox and I’ll be in touch soon.
    </p>

    {/* Centered form */}
    <div className="flex justify-center">
      <Card className="glass-morphism metallic-border p-6 w-full max-w-md">
        <CardContent className="p-0">
          <form className="space-y-6" action="https://formspree.io/f/mzzgzeqz" method="POST"> 
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Input
                placeholder="Subject"
                name="subject"
                className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                name="message"
                rows={5}
                className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full metallic-gold text-black hover:scale-105 py-3 font-semibold rounded-full transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 light:text-gray-500 mt-4">
            © {new Date().getFullYear()} Made with <span role="img" aria-label="heart hands">🫶</span> by Subhasmita
          </p>
        </div>
      </footer>
      <div style={{ height: "40px" }}></div>


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 metallic-gold text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
      </div>
    </div>
    </div>
  )
}

