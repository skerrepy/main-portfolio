"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Users, 
  GraduationCap, 
  Building2, 
  Globe, 
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  ArrowLeft
} from "lucide-react"
import Flags from "country-flag-icons/react/3x2"
import { useState, useRef } from "react"

const experiences = [
  {
    company: "Wastewize",
    role: "Full-Stack Developer",
    period: "Q1 2025",
    duration: "3 months",
    location: "Nice, France",
    country: "FR",
    description: "Developed a comprehensive in-house ERP system for waste management operations. Built end-to-end solutions including inventory tracking, client management, and automated reporting systems.",
    technologies: ["Next.js", "AWS S3", "Resend", "Shadcn", "PostgreSQL", "Vercel", "Cloudflare"],
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    logo: "/company-logos/wastewize.png",
  },
  {
    company: "Mindosystem",
    role: "Lead Developer & Team Manager",
    period: "Feb - Jul 2025",
    duration: "6 months",
    location: "Paris, France",
    country: "FR",
    description: "Led development of a comprehensive loyalty platform for businesses. Managed a team of designers and developers while building web applications, backend services, and cross-platform mobile apps.",
    technologies: ["Next.js", "AWS S3", "EC2", "Cloudflare", "Flutter", "Express.js", "Stripe", "Prisma"],
    icon: Users,
    color: "from-purple-500 to-pink-600",
    logo: "/company-logos/mindosystem.svg",
  },
  {
    company: "Formazone",
    role: "Full-Stack Developer",
    period: "Mid 2024",
    duration: "6 months",
    location: "Nice, France",
    country: "FR",
    description: "Developed an EdTech platform featuring comprehensive course management, interactive quizzes, and administrative back-office systems for bootcamp centers.",
    technologies: ["Next.js", "AWS S3", "Cloudflare", "Stripe"],
    icon: GraduationCap,
    color: "from-green-500 to-emerald-600",
    logo: "/company-logos/formazone.png",
  },
  {
    company: "Bookclick",
    role: "Full-Stack Developer",
    period: "2023 - Mid 2024",
    duration: "1.5 years",
    location: "Virginia, USA",
    country: "US",
    description: "Built an ERP system that automates manual tasks for moving, cleaning, and construction companies. Implemented comprehensive workflow automation and client management solutions.",
    technologies: ["React.js", "AWS S3", "EC2", "SES", "CloudFront", "Stripe", "MongoDB"],
    icon: Building2,
    color: "from-orange-500 to-red-600",
    logo: "/company-logos/bookclick.png",
  },
  {
    company: "iSpeakTo (formerly Penguin)",
    role: "Frontend Developer",
    period: "Summer 2023",
    duration: "4 months",
    location: "London, England",
    country: "GB",
    description: "Developed language learning games and created a comprehensive design system using Storybook. Contributed to a startup that reached $4M valuation through innovative language learning solutions.",
    technologies: ["Material UI", "Next.js", "Storybook"],
    icon: Globe,
    color: "from-indigo-500 to-blue-600",
    logo: "/company-logos/ispeakto.svg",
  },
  {
    company: "Preply",
    role: "Software Development Tutor",
    period: "Apr - Sep 2023",
    duration: "6 months",
    location: "Remote",
    country: "GLOBAL",
    description: "Shared expertise in software development with students, guiding them through fundamental concepts and advanced techniques. Tailored lessons to individual learning styles, focusing on practical coding skills and problem-solving strategies.",
    technologies: ["React.js", "MongoDB", "JavaScript", "Node.js", "Python", "Arduino"],
    icon: Code,
    color: "from-teal-500 to-cyan-600",
    logo: "/company-logos/preply.png",
  },
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Transform scroll progress to unstacking effect
  const unstackProgress = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])
  const cardSpread = useTransform(unstackProgress, [0, 1], [0, 80])
  const cardRotation = useTransform(unstackProgress, [0, 1], [0, 15])
  
  // Create individual card transforms at the top level
  const cardTransforms = experiences.map((_, i) => ({
    x: useTransform(cardSpread, (value) => value * i),
    y: useTransform(cardSpread, (value) => -value * i * 0.5),
    rotate: useTransform(cardRotation, (value) => value * i * 0.1),
  }))

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Side - Heading (Reduced width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A track record of delivering exceptional digital solutions across various industries, from startups to enterprise clients.
            </p>
          </motion.div>

          {/* Right Side - Card Game Stack (More space) */}
          <div className="relative md:col-span-2">
            <div 
              className="relative h-[600px] w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-50/50 to-gray-100/50 rounded-2xl p-6"
            >
              {/* Scroll-based card unstacking */}
              <div className="relative h-80 w-80 mx-auto">
                {experiences.map((exp, i) => {
                  const FlagComponent = exp.country !== "GLOBAL" ? Flags[exp.country] : null
                  const isHovered = hoveredIndex === i
                  const isFlipped = flippedCard === i
                  const transforms = cardTransforms[i]
                  
                  return (
                    <motion.div
                      key={`stacked-${i}`}
                      className="absolute inset-0 cursor-pointer"
                      style={{ 
                        zIndex: experiences.length - i,
                        x: transforms.x,
                        y: transforms.y,
                        rotate: transforms.rotate,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      animate={{
                        scale: isHovered ? 1.05 : 1,
                        y: isHovered ? -10 : 0,
                      }}
                      onHoverStart={() => setHoveredIndex(i)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      onClick={() => setFlippedCard(isFlipped ? null : i)}
                    >
                        <motion.div
                          className="relative w-full h-full"
                          animate={{ 
                            rotateY: isFlipped ? 180 : 0,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Front of card - Card Game Style */}
                          <Card className={`absolute inset-0 w-full h-full bg-white border-2 border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${isFlipped ? 'opacity-0' : 'opacity-100'} rounded-xl ${isHovered ? 'shadow-2xl' : 'shadow-lg'} overflow-hidden`}>
                            <div className="relative p-6 h-full flex flex-col justify-center bg-white">
                              {/* Card Corner Design */}
                              <div className="absolute top-2 left-2 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">{i + 1}</span>
                              </div>
                              
                              {/* Company Logo */}
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                  delay: 0.3 + i * 0.1, 
                                  type: "spring", 
                                  stiffness: 200,
                                  damping: 15
                                }}
                                className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100"
                              >
                                <img
                                  src={exp.logo}
                                  alt={`${exp.company} logo`}
                                  className="w-12 h-12 object-contain"
                                />
                              </motion.div>

                              {/* Company Name */}
                              <h3 className="text-xl font-bold text-center mb-2 text-gray-800 group-hover:text-primary transition-colors">
                                {exp.company}
                              </h3>

                              {/* Country Flag and Duration */}
                              <div className="flex items-center justify-center space-x-2 mb-4">
                                {FlagComponent ? (
                                  <FlagComponent
                                    title={exp.location}
                                    className="w-6 h-5 rounded-sm shadow-sm"
                                  />
                                ) : (
                                  <Globe className="w-5 h-5 text-muted-foreground" />
                                )}
                                <span className="text-sm text-muted-foreground font-medium">
                                  {exp.location.split(',')[1]?.trim() || exp.location}
                                </span>
                              </div>

                              {/* Duration Badge */}
                              <div className="text-center mb-4">
                                <Badge 
                                  variant="secondary" 
                                  className="text-sm bg-primary/10 text-primary border-primary/20"
                                >
                                  {exp.duration}
                                </Badge>
                              </div>

                              {/* See More Button */}
                              <motion.div
                                className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span className="text-sm font-medium">See more of this project</span>
                                <ChevronRight className="w-4 h-4" />
                              </motion.div>
                            </div>
                          </Card>

                          {/* Back of card - Card Game Style */}
                          <Card className={`absolute inset-0 w-full h-full bg-white border-2 border-primary/40 shadow-2xl shadow-primary/10 ${isFlipped ? 'opacity-100' : 'opacity-0'} rounded-xl overflow-hidden`} style={{ transform: 'rotateY(180deg)' }}>
                            <div className="relative p-6 h-full flex flex-col bg-white">
                              {/* Back button */}
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFlippedCard(null)
                                }}
                                className="absolute top-4 left-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ArrowLeft className="w-4 h-4 text-primary" />
                              </motion.button>

                              {/* Company Logo */}
                              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100">
                                <img
                                  src={exp.logo}
                                  alt={`${exp.company} logo`}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>

                              {/* Company Info */}
                              <div className="text-center mb-4">
                                <h3 className="text-lg font-bold mb-1 text-gray-800">{exp.company}</h3>
                                <p className="text-sm text-muted-foreground">{exp.role}</p>
                                <div className="flex items-center justify-center space-x-2 mt-2">
                                  {FlagComponent ? (
                                    <FlagComponent
                                      title={exp.location}
                                      className="w-4 h-3 rounded-sm shadow-sm"
                                    />
                                  ) : (
                                    <Globe className="w-4 h-4 text-muted-foreground" />
                                  )}
                                  <span className="text-xs text-muted-foreground">{exp.location}</span>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-center flex-1">
                                {exp.description}
                              </p>

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-1.5 justify-center">
                                {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="outline"
                                    className="text-xs px-2 py-1 bg-background/50 border-border/50"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                                {exp.technologies.length > 6 && (
                                  <Badge variant="outline" className="text-xs px-2 py-1">
                                    +{exp.technologies.length - 6}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </motion.div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}