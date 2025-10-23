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
import * as Flags from "country-flag-icons/react/3x2"
import { useState, useRef, useEffect } from "react"

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
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Transform scroll progress to grid unstacking effect
  // Cards fully unstack by 20% of section scroll
  const unstackProgress = useTransform(scrollYProgress, [0.05, 0.2], [0, 1])
  
  // Define grid positions (3 columns × 2 rows for desktop, 2 cols for tablet)
  const gridPositions = [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ]
  
  const cardWidth = 280  // Smaller card width
  const cardHeight = 320 // Smaller card height
  const gap = 24 // Gap between cards
  
  // Calculate the total grid width and offset to center it
  const totalGridWidth = (cardWidth * 3) + (gap * 2)
  
  // Create individual card transforms at the top level
  const cardTransforms = experiences.map((_, i) => {
    const gridPos = gridPositions[i]
    // Start from center, so we need to offset by half the grid width minus half a card
    const startOffsetX = (totalGridWidth / 2) - (cardWidth / 2)
    const targetX = (gridPos.col * (cardWidth + gap)) - startOffsetX
    const targetY = gridPos.row * (cardHeight + gap)
    
    return {
      x: useTransform(unstackProgress, [0, 1], [0, targetX]),
      y: useTransform(unstackProgress, [0, 1], [0, targetY]),
      rotate: useTransform(unstackProgress, [0, 1], [0, 0]),
      scale: useTransform(unstackProgress, [0, 1], [1, 0.85]),
    }
  })

  // Mobile Card Component
  const MobileCard = ({ exp, i }: { exp: typeof experiences[0], i: number }) => {
    const FlagComponent = exp.country !== "GLOBAL" ? (Flags as any)[exp.country] : null
    const isFlipped = flippedCard === i

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="cursor-pointer"
        onClick={() => setFlippedCard(isFlipped ? null : i)}
      >
        <motion.div
          className="relative w-full h-80"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <Card className={`absolute inset-0 w-full h-full bg-white border-2 border-gray-200 ${isFlipped ? 'opacity-0' : 'opacity-100'} rounded-xl shadow-lg overflow-hidden`}>
            <div className="relative p-6 h-full flex flex-col justify-center bg-white">
              <div className="absolute top-3 left-3 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{i + 1}</span>
              </div>
              
              <motion.div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 object-contain" />
              </motion.div>

              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{exp.company}</h3>

              <div className="flex items-center justify-center space-x-2 mb-4">
                {FlagComponent ? (
                  <FlagComponent title={exp.location} className="w-6 h-5 rounded-sm shadow-sm" />
                ) : (
                  <Globe className="w-5 h-5 text-muted-foreground" />
                )}
                <span className="text-sm text-muted-foreground font-medium">
                  {exp.location.split(',')[1]?.trim() || exp.location}
                </span>
              </div>

              <div className="text-center mb-4">
                <Badge variant="secondary" className="text-sm bg-primary/10 text-primary border-primary/20">
                  {exp.duration}
                </Badge>
              </div>

              <motion.div className="flex items-center justify-center space-x-2 text-primary" whileHover={{ scale: 1.05 }}>
                <span className="text-sm font-medium">See more</span>
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </div>
          </Card>

          {/* Back of card */}
          <Card className={`absolute inset-0 w-full h-full bg-white border-2 border-primary/40 shadow-2xl ${isFlipped ? 'opacity-100' : 'opacity-0'} rounded-xl overflow-hidden`} style={{ transform: 'rotateY(180deg)' }}>
            <div className="relative p-4 h-full flex flex-col bg-white">
              <motion.button
                onClick={(e) => { e.stopPropagation(); setFlippedCard(null); }}
                className="absolute top-2 left-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="w-4 h-4 text-primary" />
              </motion.button>

              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-10 h-10 object-contain" />
              </div>

              <div className="text-center mb-3">
                <h3 className="text-base font-bold mb-1 text-gray-800">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  {FlagComponent ? (
                    <FlagComponent title={exp.location} className="w-4 h-3 rounded-sm shadow-sm" />
                  ) : (
                    <Globe className="w-4 h-4 text-muted-foreground" />
                  )}
                  <span className="text-xs text-muted-foreground">{exp.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed text-center flex-1 overflow-y-auto">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center">
                {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs px-2 py-1 bg-background/50 border-border/50">
                    {tech}
                  </Badge>
                ))}
                {exp.technologies.length > 6 && (
                  <Badge variant="outline" className="text-xs px-2 py-1">+{exp.technologies.length - 6}</Badge>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Mobile View */}
        {isMobile && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A track record of delivering exceptional digital solutions across various industries, from startups to enterprise clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {experiences.map((exp, i) => (
                <MobileCard key={i} exp={exp} i={i} />
              ))}
            </div>
          </div>
        )}

        {/* Desktop View */}
        {!isMobile && (
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

            {/* Right Side - Card Grid (More space) */}
            <div className="relative md:col-span-2">
            <div 
              className="relative w-full max-w-5xl mx-auto bg-gradient-to-br from-gray-50/50 to-gray-100/50 rounded-2xl p-8"
              style={{ 
                minHeight: `${(cardHeight * 2) + (gap * 3) + 80}px`,
              }}
            >
              {/* Grid placeholder spaces - centered */}
              <div className="absolute top-8 left-1/2 grid grid-cols-3" style={{ 
                gridTemplateRows: `repeat(2, ${cardHeight}px)`,
                gridTemplateColumns: `repeat(3, ${cardWidth}px)`,
                gap: `${gap}px`,
                transform: `translateX(-${totalGridWidth / 2}px)`,
              }}>
                {gridPositions.map((_, i) => (
                  <motion.div
                    key={`placeholder-${i}`}
                    className="border-2 border-dashed border-gray-300/50 rounded-xl bg-white/30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* Scroll-based card unstacking to grid */}
              <div className="absolute top-8 left-1/2" style={{ 
                width: `${cardWidth}px`,
                height: `${(cardHeight * 2) + gap}px`,
                transform: `translateX(-${cardWidth / 2}px)`,
              }}>
                {experiences.map((exp, i) => {
                  const FlagComponent = exp.country !== "GLOBAL" ? (Flags as any)[exp.country] : null
                  const isHovered = hoveredIndex === i
                  const isFlipped = flippedCard === i
                  const transforms = cardTransforms[i]
                  
                  return (
                    <motion.div
                      key={`stacked-${i}`}
                      className="absolute cursor-pointer"
                      style={{ 
                        x: transforms.x,
                        y: transforms.y,
                        rotate: transforms.rotate,
                        scale: transforms.scale,
                        width: `${cardWidth}px`,
                        height: `${cardHeight}px`,
                        zIndex: experiences.length - i,
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      whileHover={{
                        scale: 1.05,
                        zIndex: 100,
                        transition: { duration: 0.2 }
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
                            <div className="relative p-4 h-full flex flex-col justify-center bg-white">
                              {/* Card Corner Design */}
                              <div className="absolute top-2 left-2 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
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
                                className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100"
                              >
                                <img
                                  src={exp.logo}
                                  alt={`${exp.company} logo`}
                                  className="w-9 h-9 object-contain"
                                />
                              </motion.div>

                              {/* Company Name */}
                              <h3 className="text-base font-bold text-center mb-2 text-gray-800 group-hover:text-primary transition-colors">
                                {exp.company}
                              </h3>

                              {/* Country Flag and Duration */}
                              <div className="flex items-center justify-center space-x-1.5 mb-3">
                                {FlagComponent ? (
                                  <FlagComponent
                                    title={exp.location}
                                    className="w-5 h-4 rounded-sm shadow-sm"
                                  />
                                ) : (
                                  <Globe className="w-4 h-4 text-muted-foreground" />
                                )}
                                <span className="text-xs text-muted-foreground font-medium">
                                  {exp.location.split(',')[1]?.trim() || exp.location}
                                </span>
                              </div>

                              {/* Duration Badge */}
                              <div className="text-center mb-3">
                                <Badge 
                                  variant="secondary" 
                                  className="text-xs bg-primary/10 text-primary border-primary/20"
                                >
                                  {exp.duration}
                                </Badge>
                              </div>

                              {/* See More Button */}
                              <motion.div
                                className="flex items-center justify-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span className="text-xs font-medium">See more</span>
                                <ChevronRight className="w-3 h-3" />
                              </motion.div>
                            </div>
                          </Card>

                          {/* Back of card - Card Game Style */}
                          <Card className={`absolute inset-0 w-full h-full bg-white border-2 border-primary/40 shadow-2xl shadow-primary/10 ${isFlipped ? 'opacity-100' : 'opacity-0'} rounded-xl overflow-hidden`} style={{ transform: 'rotateY(180deg)' }}>
                            <div className="relative p-3 h-full flex flex-col bg-white">
                              {/* Back button */}
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFlippedCard(null)
                                }}
                                className="absolute top-2 left-2 p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ArrowLeft className="w-3 h-3 text-primary" />
                              </motion.button>

                              {/* Company Logo */}
                              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100">
                                <img
                                  src={exp.logo}
                                  alt={`${exp.company} logo`}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>

                              {/* Company Info */}
                              <div className="text-center mb-2">
                                <h3 className="text-sm font-bold mb-0.5 text-gray-800">{exp.company}</h3>
                                <p className="text-xs text-muted-foreground">{exp.role}</p>
                                <div className="flex items-center justify-center space-x-1.5 mt-1">
                                  {FlagComponent ? (
                                    <FlagComponent
                                      title={exp.location}
                                      className="w-3 h-2.5 rounded-sm shadow-sm"
                                    />
                                  ) : (
                                    <Globe className="w-3 h-3 text-muted-foreground" />
                                  )}
                                  <span className="text-xs text-muted-foreground">{exp.location}</span>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-xs text-muted-foreground mb-2 leading-relaxed text-center flex-1 overflow-y-auto">
                                {exp.description}
                              </p>

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-1 justify-center">
                                {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="outline"
                                    className="text-xs px-1.5 py-0.5 bg-background/50 border-border/50"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                                {exp.technologies.length > 5 && (
                                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                                    +{exp.technologies.length - 5}
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
        )}
      </div>
    </section>
  )
}