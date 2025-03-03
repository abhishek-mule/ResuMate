"use client"

import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    content: "ResumeAI helped me land my dream job at a top tech company. The AI suggestions made my resume stand out, and the interview coaching gave me the confidence I needed.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GlobalBrands",
    content: "After using ResumeAI, I received three job offers in just two weeks. The job matching feature found opportunities I wouldn't have discovered on my own.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "DesignHub",
    content: "The AI-powered resume builder transformed my generic resume into a professional showcase of my skills. I'm now working at my dream design agency thanks to ResumeAI.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Financial Analyst",
    company: "InvestCorp",
    content: "The career insights feature helped me pivot to a higher-paying sector in finance. ResumeAI's data-driven approach to career planning is revolutionary.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    rating: 4
  },
  {
    name: "Priya Patel",
    role: "Healthcare Administrator",
    company: "MedLife",
    content: "As someone changing careers, ResumeAI was invaluable in highlighting my transferable skills. The personalized job matches were spot on for my experience level.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  }
]

const TestimonialCard = ({ testimonial, index, direction }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "w-full md:w-1/3 transition-all duration-300",
        direction > 0 ? "animate-in fade-in slide-in-from-right-10" : "animate-in fade-in slide-in-from-left-10"
      )}
    >
      <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 overflow-hidden group border-2 hover:border-primary/30">
        <CardContent className="p-6 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-6 -mr-6 group-hover:bg-primary/10 transition-colors duration-300"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: [0, 15, 0] } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="relative z-10"
          >
            <Quote className="h-10 w-10 text-primary/30 mb-4" />
          </motion.div>
          
          <div className="mb-6">
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-muted-foreground'}`} 
                />
              ))}
            </div>
          </div>
          
          <p className="mb-6 text-muted-foreground relative z-10">{testimonial.content}</p>
          
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <Badge variant="outline" className="mt-1 text-xs bg-primary/5">
                {testimonial.company}
              </Badge>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  
  const testimonialsPerView = 3
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView)

  const prev = () => {
    setDirection(-1)
    setCurrent((current) => (current === 0 ? totalSlides - 1 : current - 1))
  }

  const next = () => {
    setDirection(1)
    setCurrent((current) => (current === totalSlides - 1 ? 0 : current + 1))
  }

  const getVisibleTestimonials = () => {
    const startIdx = current * testimonialsPerView
    return testimonials.slice(startIdx, startIdx + testimonialsPerView)
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5"
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-primary/50"></div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <MessageSquare className="inline-block h-3.5 w-3.5 mr-1" />
              <span>Success Stories</span>
            </div>
            <div className="h-px w-12 bg-primary/50"></div>
          </motion.div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with ResumeAI
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard 
                  key={`${current}-${index}`}
                  testimonial={testimonial} 
                  index={index} 
                  direction={direction} 
                />
              ))}
            </AnimatePresence>
          </div>
          
          <motion.div 
            className="flex justify-center mt-10 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonials"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {[...Array(totalSlides)].map((_, i) => (
              <Button
                key={i}
                variant={current === i ? "default" : "outline"}
                size="icon"
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full h-3 w-3 p-0 ${current === i ? 'bg-primary' : 'bg-transparent border-primary/30'}`}
              />
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonials"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}