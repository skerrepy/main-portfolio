"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react"

export default function Mission() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every line of code, every design decision is made with purpose and precision."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "I put users at the center of every solution, ensuring exceptional experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches to solve complex problems."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Building solutions that scale and grow with your business objectives."
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 md:p-16 text-primary-foreground relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                My Mission
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                To bridge the gap between innovative ideas and exceptional digital experiences. 
                I help startups and enterprises create meaningful connections with their users through 
                thoughtful development, strategic product management, and user-centered design.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300"
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-lg mb-6 opacity-90">
                Ready to turn your vision into reality?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors duration-300"
              >
                Let's Start Building
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
