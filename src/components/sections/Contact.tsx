"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").optional().or(z.literal("")),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Send email using Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "Available on request",
      href: "#",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tunisia",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind? I'd love to hear about it. Whether you need a full-stack application, 
                mobile app, or strategic product guidance, I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={i}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
            >
              <h3 className="font-bold mb-2">Quick Response Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to mention it in your message.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30 backdrop-blur-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 ease-out"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </motion.div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 ease-out"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </motion.div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Your phone number (optional)"
                              className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 ease-out"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </motion.div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Project brief or inquiry"
                              className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 ease-out"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </motion.div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project, timeline, and any specific requirements..."
                              className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 ease-out min-h-32 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </motion.div>
                      </FormItem>
                    )}
                  />

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                    >
                      ✅ Thank you for your message! I'll get back to you within 24 hours.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                    >
                      ❌ Something went wrong. Please try again or contact me directly.
                    </motion.div>
                  )}

                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base font-semibold transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
