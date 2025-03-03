"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Lightbulb, Sparkles, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function ImprovementSuggestions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const suggestions = [
    {
      id: 1,
      title: "Add more quantifiable achievements",
      description: "Including metrics and results will strengthen your resume.",
      impact: "High",
      impactColor: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      id: 2,
      title: "Update your skills section",
      description: "Add trending technologies like React 18 and Next.js 13.",
      impact: "Medium",
      impactColor: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20"
    },
    {
      id: 3,
      title: "Improve your summary statement",
      description: "Make it more concise and highlight your unique value proposition.",
      impact: "Medium",
      impactColor: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20"
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
          <motion.div variants={cardVariants}>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Resume Improvement</span>
              </div>
              <div className="text-sm font-normal">
                Resume Score: <span className="font-bold text-green-500">78/100</span>
              </div>
            </CardTitle>
            <CardDescription>
              AI-powered suggestions to improve your resume and increase interview chances.
            </CardDescription>
            <div className="relative h-2 mt-2 overflow-hidden rounded-full bg-muted">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-green-500"
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <motion.div 
                key={suggestion.id} 
                variants={cardVariants}
                whileHover={{ scale: 1.01, y: -2 }}
                className="group"
              >
                <div className={`flex gap-3 p-3 border rounded-md transition-all duration-300 ${suggestion.bgColor} hover:shadow-sm group-hover:border-primary/20`}>
                  <div className="relative">
                    <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">{suggestion.title}</h3>
                      <span className={`text-xs font-medium ${suggestion.impactColor}`}>
                        {suggestion.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                    <Button 
                      variant="link" 
                      className="h-auto p-0 mt-1 text-xs gap-1 group/btn"
                    >
                      Apply Suggestion 
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={cardVariants}
            className="mt-4 pt-4 border-t"
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-center gap-1 hover:bg-primary/5 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="h-4 w-4 mr-1" /> Get Full AI Analysis
              </span>
              <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}