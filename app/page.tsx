"use client" 
import StarsBG from '../components/starsBG' // adjust the path if needed
import { Typewriter } from 'react-simple-typewriter'
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
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Electron JS", "Python", "scikit-learn", "matplotlib"],
      github: "#",
      live: "#",
    },
    {
      title: "SkillForge",
      description:
        "A gamified platform to learn coding, where I developed the AI/ML engine powering personalized learning roadmap generation using Google Gemini AI, with backend integration in Python and MongoDB.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Google Gemini AI", "Python", "MongoDB", "Next.js", "TypeScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a component-based architecture and custom hooks to showcase projects and skills.(Yes,this one!)",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "#",
      live: "#",
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
          <div className="flex justify-between items-center py-1">
            {/* Left Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 glass-morphism px-4 py-2 rounded-full hover:scale-105 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full metallic-border overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Subhasmita"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-morphism rounded-xl border border-yellow-400/20 light:border-gray-300/30 overflow-hidden">
                  {/* Contact Section */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <MessageCircle className="w-4 h-4 metallic-silver-text" />
                      <h3 className="font-semibold metallic-silver-text">Contact</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300 light:text-gray-600">subhasmita@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300 light:text-gray-600">github.com/subhasmita</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300 light:text-gray-600">linkedin.com/in/subhasmita</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full mt-4 metallic-gold text-black hover:scale-105 transition-all duration-300"
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              )}
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
              
            </div>
          </div>
        )}
        <div className="absolute left-0 bottom-0 w-full h-1 overflow-hidden pointer-events-none rounded-b-2xl">
  <div className="moving-gold-bar h-full w-full"></div>
</div>
      </nav>

      {/* Hero Section */} 
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
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

          <p className="text-lg text-gray-400 light:text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm a full stack developer who loves building everything from backend logic to interactive front ends.
I’m passionate about AI/ML with a few hands-on projects.
List of ideas keeps growing, and hence the building (and learning) has just begun.
          </p>
          <p className="text-lg text-gray-400 light:text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
  What more?&nbsp;
  <span className="text-yellow-500 font-semibold">
    I{' '}
    <Typewriter
      words={['write.', 'emcee.', 'read.', 'dance.', 'run marathons.']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1200}
    />
  </span>
</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="metallic-gold text-black hover:scale-105 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="glass-morphism metallic-border hover:scale-105 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:metallic-gold-text hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:metallic-silver-text hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:metallic-gold-text hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="mx-4 metallic-gold-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-morphism metallic-border hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 metallic-gold-text">{project.title}</h3>
                    <p className="text-gray-300 light:text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="glass-morphism text-xs px-2 py-1 border-yellow-400/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center text-gray-400 hover:metallic-gold-text transition-all duration-300 text-sm hover:scale-105"
                      >
                        <Github size={16} className="mr-1" />
                        View Repo
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/*<div className="text-center mt-12">
            <Button className="glass-morphism metallic-border hover:scale-105 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300">
              View All Projects
            </Button>
          </div> */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="metallic-gold-text">Tech</span>
            <span className="mx-4 metallic-silver-text">Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "TypeScript", icon: "TS" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "JavaScript", icon: "JS" },
              { name: "HTML5", icon: "🌐" },
              { name: "CSS3", icon: "🎨" },
              { name: "Tailwind", icon: "💨" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Git", icon: "📝" },
              { name: "Docker", icon: "🐳" },
              { name: "AWS", icon: "☁️" },
              { name: "Figma", icon: "🎯" },
              { name: "Vue.js", icon: "💚" },
              { name: "GraphQL", icon: "◈" },
              { name: "Redux", icon: "🔄" },
            ].map((tech, index) => (
              <Card
                key={index}
                className="glass-morphism metallic-border hover:scale-110 transition-all duration-300 group p-6 text-center"
              >
                <CardContent className="p-0">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-sm font-medium metallic-gold-text">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="metallic-gold-text">Get In</span>
            <span className="mx-4 metallic-silver-text">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold metallic-gold-text">Let's Work Together</h3>
              <p className="text-gray-300 light:text-gray-600 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="metallic-gold-text mr-4" size={20} />
                  <span className="text-gray-300 light:text-gray-600">subhasmita@example.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="metallic-silver-text mr-4" size={20} />
                  <span className="text-gray-300 light:text-gray-600">github.com/subhasmita</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="metallic-gold-text mr-4" size={20} />
                  <span className="text-gray-300 light:text-gray-600">linkedin.com/in/subhasmita</span>
                </div>
              </div>
            </div>

            <Card className="glass-morphism metallic-border p-6">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="glass-morphism metallic-border focus:scale-105 transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
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
      <footer className="border-t border-yellow-400/10 light:border-gray-300/20 py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <SubhasmitaLogo size="text-lg" />
          <p className="text-gray-400 light:text-gray-500 mt-4">
            © {new Date().getFullYear()} Subhasmita. All rights reserved.
          </p>
        </div>
      </footer>

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