"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle, Star, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])
  
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  
  useEffect(() => {
    setMounted(true)
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "AI-Powered Resume Builder",
      description: "Create professional resumes tailored to your industry with AI assistance",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Smart Job Matching",
      description: "Find jobs that match your skills and experience with AI precision",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Interview Preparation",
      description: "Practice and perfect your interview skills with AI feedback",
      icon: <Star className="h-5 w-5" />
    }
  ]

  return (
    <div 
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center"
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 100%)"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5"
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5"
          animate={{ 
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-48 h-48 rounded-full bg-primary/3"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity, y }}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 w-fit gap-1"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              <span>AI-Powered Career Platform</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Elevate Your Career with AI-Powered Resume Building
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Create professional resumes, match with your dream jobs, and prepare for interviews—all with the power of AI.
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 ${activeFeature === index ? 'bg-primary/10' : 'hover:bg-muted/60'}`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${activeFeature === index ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-medium">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                    {activeFeature === index && (
                      <motion.div 
                        className="ml-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/resume-builder">
                <Button size="lg" className="px-8 relative overflow-hidden group w-full sm:w-auto">
                  <span className="relative z-10 flex items-center">
                    Create Your Resume <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
              <Link href="/job-search">
                <Button size="lg" variant="outline" className="px-8 relative overflow-hidden group w-full sm:w-auto">
                  <span className="relative z-10">Explore Jobs</span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=50&h=50&auto=format&fit=crop`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by 10,000+ professionals</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mx-auto lg:ml-auto flex justify-center lg:justify-end"
            style={{ scale }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Main image */}
              <motion.div 
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  alt="Resume builder interface"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium text-lg">AI-Powered Resume Builder</p>
                  <p className="text-sm opacity-80">Create professional resumes in minutes</p>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4 w-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-sm font-medium">Resume Score</div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>ATS Optimized</span>
                  <span className="font-medium">85%</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-background rounded-lg shadow-lg p-3 w-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="h-3.5 w-3.5 text-blue-500" />
                  </div>
                  <div className="text-sm font-medium">Job Match</div>
                </div>
                <div className="flex items-center mt-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600">92% Match</Badge>
                  <span className="text-xs ml-2 text-muted-foreground">Senior Developer</span>
                </div>
              </motion.div>
              
              <AnimatePresence>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${20 + i * 20}%`,
                      right: i % 2 === 0 ? "-10%" : "auto",
                      left: i % 2 !== 0 ? "-10%" : "auto",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5],
                      x: i % 2 === 0 ? [0, -30, -30, 0] : [0, 30, 30, 0],
                      y: [-20, -40, -40, -20]
                    }}
                    transition={{ 
                      duration: 5,
                      delay: i * 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <div className="bg-primary/80 text-primary-foreground rounded-full px-3 py-1 text-sm shadow-lg flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      <span>AI Enhanced</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary/50"></span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary/50"></span>
        </motion.div>
      </div>
    </div>
  )
}