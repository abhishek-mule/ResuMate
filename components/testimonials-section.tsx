"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    content: "ResumeAI helped me land my dream job at a top tech company. The AI suggestions made my resume stand out, and the interview coaching gave me the confidence I needed.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "After using ResumeAI, I received three job offers in just two weeks. The job matching feature found opportunities I wouldn't have discovered on my own.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    content: "The AI-powered resume builder transformed my generic resume into a professional showcase of my skills. I'm now working at my dream design agency thanks to ResumeAI.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    role: "Financial Analyst",
    content: "The career insights feature helped me pivot to a higher-paying sector in finance. ResumeAI's data-driven approach to career planning is revolutionary.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Priya Patel",
    role: "Healthcare Administrator",
    content: "As someone changing careers, ResumeAI was invaluable in highlighting my transferable skills. The personalized job matches were spot on for my experience level.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop"
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
      <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: [0, 15, 0] } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <Quote className="h-8 w-8 text-primary/40 mb-4" />
          </motion.div>
          <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <Avatar className="h-10 w-10 mr-4 border-2 border-primary/20">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted relative overflow-hidden">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with ResumeAI
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                index={index} 
                direction={direction} 
              />
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-8 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonials"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonials"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}