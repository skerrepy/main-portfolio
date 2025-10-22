"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail, Code, Smartphone, Palette } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/skerrepy", color: "text-gray-800 dark:text-gray-200" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/omar-hanafi-654489100/", color: "text-blue-600" },
    { icon: Mail, label: "Email", href: "mailto:omarhanaficontact@gmail.com", color: "text-red-500" },
  ]

  const services = [
    { icon: Code, label: "Full-Stack Development", color: "text-blue-500" },
    { icon: Smartphone, label: "Mobile Development", color: "text-green-500" },
    { icon: Palette, label: "UI/UX Design", color: "text-purple-500" },
  ]

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start relative z-10"
      >
        {/* Left Column - Main Content */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Full-Stack Developer &{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Product Manager
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I help startups and enterprises build exceptional digital products through thoughtful development, 
              strategic product management, and user-centered design.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Center Column - Profile Picture */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 flex flex-col items-center space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20 shadow-2xl"
            animate={{ float: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <img
              src="/my-picture.png"
              alt="Omar Hanafi - Full-Stack Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 ${social.color} hover:shadow-lg`}
                  title={social.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Right Column - Profile Info & Mission */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Profile Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-card border border-border/50 p-6 space-y-4"
          >
            <div>
              <h3 className="text-2xl font-bold">Omar Hanafi</h3>
              <p className="text-sm text-muted-foreground">Tunisia</p>
            </div>

            {/* Services */}
            <div className="space-y-2">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Icon className={`w-4 h-4 ${service.color}`} />
                    <span className="text-sm font-medium">{service.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-center"
            >
              <p className="text-xs font-bold text-primary">FREELANCE DEVELOPER</p>
              <p className="text-sm font-semibold text-foreground mt-1">Available for Projects</p>
            </motion.div>
          </motion.div>


          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-3"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
