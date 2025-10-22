"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Wastewize ERP System",
      description: "Comprehensive in-house ERP system for waste management operations, streamlining business processes and improving operational efficiency.",
      image: "/api/placeholder/600/400",
      tags: ["ERP", "Full-Stack", "Next.js", "AWS", "PostgreSQL"],
      year: "2025",
      featured: true,
      status: "Completed",
      client: "Wastewize, Nice, France",
      technologies: ["Next.js", "AWS S3", "Resend", "Shadcn", "PostgreSQL", "Vercel", "Cloudflare"],
      link: "https://wastewize.fr/",
    },
    {
      title: "Vaymees SaaS Platform",
      description: "Complete SaaS platform that helps restaurants and cafés digitize their operations through QR-code menus, analytics dashboards, and comprehensive management tools.",
      image: "/api/placeholder/600/400",
      tags: ["SaaS", "QR Menus", "Analytics", "Restaurant Tech"],
      year: "2024",
      featured: true,
      status: "Completed",
      client: "Personal Project",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "AWS S3", "CloudFront"],
      link: "https://www.vaymees.com/tunis/la-marsa/restaurant/Pregusta--3649",
    },
    {
      title: "Mindosystem Loyalty Platform",
      description: "Complete loyalty platform with web app, backend services, and mobile applications for businesses to increase customer retention through subscriptions and rewards.",
      image: "/api/placeholder/400/300",
      tags: ["Mobile App", "Web App", "Backend", "Team Leadership"],
      year: "2025",
      status: "Completed",
      client: "Mindosystem, Paris, France",
      technologies: ["Next.js", "AWS S3", "EC2", "Cloudflare", "Flutter", "Express.js", "Stripe", "Prisma"],
      link: "https://www.mindosystem.com/",
      mobileLink: "https://play.google.com/store/apps/details?id=com.mindosystem&hl=en",
    },
    {
      title: "Formazone EdTech Platform",
      description: "Educational technology platform featuring course management, interactive quizzes, and comprehensive back-office system for bootcamp operations.",
      image: "/api/placeholder/400/300",
      tags: ["EdTech", "Learning Management", "Back-Office"],
      year: "2024",
      status: "Completed",
      client: "Formazone, Nice, France",
      technologies: ["Next.js", "AWS S3", "Cloudflare", "Stripe"],
      link: "https://www.formazone.fr/",
    },
    {
      title: "Bookclick ERP Automation",
      description: "ERP system that automates manual tasks for moving, cleaning, and construction companies, significantly improving operational efficiency and reducing human error.",
      image: "/api/placeholder/400/300",
      tags: ["ERP", "Automation", "Business Process"],
      year: "2023-2024",
      status: "Completed",
      client: "Bookclick, Virginia, USA",
      technologies: ["React.js", "AWS S3", "EC2", "SES", "CloudFront", "Stripe", "MongoDB"],
    },
    {
      title: "iSpeakTo Language Platform",
      description: "Interactive language learning platform with comprehensive design system. Contributed to product strategy and helped achieve $4M company valuation. Now rebranded as iSpeakTo.",
      image: "/api/placeholder/400/300",
      tags: ["Language Learning", "Education", "Design System", "AI"],
      year: "2023",
      status: "Completed",
      client: "iSpeakTo, London, England",
      technologies: ["Material UI", "Next.js", "Storybook"],
      link: "https://www.ispeakto.com/",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
        >
          <div className="lg:col-span-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Featured Work</h2>
            <p className="text-muted-foreground text-lg mb-6">
              A selection of projects that showcase my expertise in full-stack development, 
              product management, and team leadership.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                onClick={() => window.open("https://github.com/skerrepy", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </motion.div>
          </div>

          {/* Featured Project */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-3"
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
          >
            <Card 
              className="overflow-hidden bg-card border border-border/50 hover:border-primary/30 cursor-pointer group h-full"
              onClick={() => projects[1].link && window.open(projects[1].link, '_blank')}
            >
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-muted rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍽️</div>
                    <p className="text-lg font-semibold">Vaymees SaaS Platform</p>
                    <p className="text-sm text-muted-foreground">Restaurant Digitalization</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-sm font-semibold mb-2 uppercase tracking-wide">
                      {projects[1].year} • {projects[1].status}
                    </p>
                    <h3 className="text-3xl font-bold">{projects[1].title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{projects[1].client}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {projects[1].description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {projects[1].tags.map((tag, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.1 }}
                      className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {projects[1].technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.filter((_, i) => i !== 1).map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Card 
                className="overflow-hidden bg-card border border-border/50 hover:border-primary/30 cursor-pointer group h-full flex flex-col"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className={`relative overflow-hidden bg-muted ${i === 0 ? "h-64" : "h-48"}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {project.title.includes("Wastewize") ? "🏢" : 
                         project.title.includes("Mindosystem") ? "📱" : 
                         project.title.includes("Formazone") ? "🎓" : 
                         project.title.includes("Bookclick") ? "📦" : 
                         project.title.includes("iSpeakTo") ? "🗣️" : "💼"}
                      </div>
                      <p className="text-sm font-semibold">{project.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.link && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                        {project.year} • {project.status}
                      </p>
                      <span className="text-xs text-muted-foreground">{project.client}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: j * 0.1 }}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
