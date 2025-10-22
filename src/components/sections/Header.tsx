"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  const navItems = ["About", "Experience", "Portfolio", "Services", "Contact"]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Omar Hanafi
        </motion.div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-foreground/70 hover:text-primary transition-all duration-300 ease-out"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
