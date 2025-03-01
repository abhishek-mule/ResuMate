"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-white/10"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.h2 
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Career?
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join thousands of professionals who have already boosted their careers with our AI-powered platform.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/resume-builder">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 relative overflow-hidden group"
            >
              <span className="relative z-10">Create Your Resume</span>
              <motion.span 
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
          <Link href="/signup">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Sign Up for Free</span>
              <motion.span 
                className="absolute inset-0 bg-primary-foreground"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-primary-foreground overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=50&h=50&auto=format&fit=crop`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm opacity-90">Join 10,000+ users today</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}