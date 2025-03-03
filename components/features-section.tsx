"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Briefcase,
  FileText,
  MessageSquare,
  Sparkles,
  Target,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FeatureCard = ({ icon, title, description, benefits, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full transform hover:shadow-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardHeader className="pb-2">
          <motion.div 
            className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: [0, 10, 0] } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3 text-sm">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + (i * 0.1) }}
              >
                <CheckCircle className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
          >
            <Button variant="ghost" className="p-0 h-auto text-primary group/btn">
              Learn more <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
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
      icon: <Star className="h-6 w-6 text-primary" />,
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-primary/50"></div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <Sparkles className="inline-block h-3.5 w-3.5 mr-1" />
              <span>AI-Powered Features</span>
            </div>
            <div className="h-px w-12 bg-primary/50"></div>
          </motion.div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
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
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" className="px-8 relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              <Zap className="mr-2 h-4 w-4" /> Get Started for Free
            </span>
            <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}