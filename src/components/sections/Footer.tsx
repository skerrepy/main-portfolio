"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/skerrepy", 
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/omar-hanafi-654489100/", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: Mail, 
      href: "mailto:omarhanaficontact@gmail.com", 
      label: "Email",
      color: "hover:text-red-500"
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Omar Hanafi
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer & Product Manager crafting digital solutions that bridge 
              innovative ideas with exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300 ease-out ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 ease-out"
                    whileHover={{ x: 4 }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:omarhanaficontact@gmail.com"
                  className="text-primary hover:underline"
                >
                  omarhanaficontact@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Tunisia</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="text-foreground">Open for new projects</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Omar Hanafi. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
