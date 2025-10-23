"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="sticky top-2 z-50 px-4 sm:px-6 lg:px-8 pt-2">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-gradient-to-r from-primary to-blue-600 backdrop-blur-md rounded-full shadow-lg"
      >
        <div className="px-8 sm:px-12 lg:px-16 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold text-white"
          >
            Omar Hanafi
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              className="bg-white hover:bg-white/90 text-primary rounded-full px-6 py-2 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a call
            </Button>
          </motion.div>
        </div>
      </motion.header>
    </div>
  )
}
