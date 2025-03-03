"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Briefcase,
  FileText,
  MessageSquare,
  Sparkles,
  Target,
  Users
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react" // Add this import

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  benefits: string[]
  index: number
}

const FeatureCard = ({ icon, title, description, benefits, index }: FeatureCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full transform hover:-translate-y-2">
        <CardHeader className="pb-2">
          <motion.div 
            className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: [0, 10, 0] } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {icon}
          </motion.div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + (i * 0.1) }}
              >
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "AI Resume Builder",
      description: "Create professional resumes tailored to your industry with AI assistance",
      benefits: [
        "AI-powered content suggestions",
        "Industry-specific templates",
        "ATS-optimized formatting"
      ]
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Job Matching",
      description: "Find jobs that match your skills and experience with AI precision",
      benefits: [
        "Personalized job recommendations",
        "Skills gap analysis",
        "Salary insights and comparisons"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "AI Interview Coach",
      description: "Practice and perfect your interview skills with AI feedback",
      benefits: [
        "Mock interview simulations",
        "Real-time feedback on responses",
        "Industry-specific question bank"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Career Insights",
      description: "Get data-driven insights to make informed career decisions",
      benefits: [
        "Industry trends and forecasts",
        "Skill demand analysis",
        "Career path recommendations"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Networking Tools",
      description: "Connect with professionals and expand your career network",
      benefits: [
        "Industry-specific communities",
        "Mentor matching",
        "Virtual networking events"
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Cover Letter Generator",
      description: "Create compelling cover letters tailored to each job application",
      benefits: [
        "Job-specific content generation",
        "Professional templates",
        "Tone and style customization"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -10, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 12,
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
            Powerful Features to Boost Your Career
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform offers everything you need to land your dream job
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}