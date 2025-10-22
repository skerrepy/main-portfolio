"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Smartphone, Palette, Database, Cloud, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies. From database design to user interface, I create scalable and maintainable solutions that grow with your business.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "DevOps & Deployment"],
      technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB"],
      number: "01",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. I specialize in React Native for efficient development while maintaining native performance and user experience.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Deployment"],
      technologies: ["React Native", "Expo", "iOS", "Android", "TypeScript", "Firebase"],
      number: "02",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality. I create intuitive interfaces and engaging user experiences that drive user satisfaction and business growth.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Storybook", "Tailwind CSS"],
      number: "03",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture. I build secure APIs, manage databases, and implement authentication systems that power your applications.",
      features: ["API Development", "Database Management", "Authentication", "Cloud Integration"],
      technologies: ["Node.js", "Python", "Django", "Express.js", "PostgreSQL", "Redis"],
      number: "04",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "DevOps & Deployment",
      description: "Streamlined deployment and infrastructure management. I set up CI/CD pipelines, configure cloud services, and ensure your applications run smoothly in production.",
      features: ["CI/CD Pipelines", "Cloud Deployment", "Docker", "Monitoring"],
      technologies: ["AWS", "Docker", "GitHub Actions", "Vercel", "Railway", "Nginx"],
      number: "05",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Product Management",
      description: "Strategic product development from concept to launch. I help define product roadmaps, prioritize features, and ensure technical solutions align with business objectives.",
      features: ["Product Strategy", "Feature Planning", "Team Leadership", "Stakeholder Management"],
      technologies: ["Agile", "Scrum", "Jira", "Notion", "Figma", "Analytics"],
      number: "06",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-16 items-start"
        >
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Can I Help You?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I provide comprehensive digital solutions that combine technical expertise with strategic thinking. 
              From initial concept to final deployment, I ensure your project succeeds.
            </p>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div 
                key={i} 
                variants={cardVariants} 
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <Card className="p-6 h-full bg-card hover:shadow-xl transition-all duration-300 ease-out border-border/50 hover:border-primary/30 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${service.color} rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-10`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }} 
                        className={`p-3 bg-gradient-to-r ${service.color} rounded-lg text-white`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="text-3xl font-bold text-muted-foreground/20">{service.number}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{service.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
