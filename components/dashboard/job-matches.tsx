"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Building, DollarSign, MapPin, Star, ExternalLink, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function JobMatches() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120K - $150K",
      matchScore: 92,
      isNew: true
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "InnovateTech",
      location: "New York, NY (Hybrid)",
      salary: "$110K - $140K",
      matchScore: 87,
      isNew: true
    },
    {
      id: 3,
      title: "UI/UX Developer",
      company: "DesignHub",
      location: "Austin, TX (Remote)",
      salary: "$100K - $130K",
      matchScore: 81,
      isNew: false
    }
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
          <div className="flex items-center justify-between">
            <motion.div variants={cardVariants}>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>AI Job Matches</span>
              </CardTitle>
              <CardDescription>
                Jobs that match your skills and experience, powered by AI.
              </CardDescription>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 gap-1 border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                View All
              </Button>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id} 
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <div className="border rounded-md p-4 bg-card hover:bg-muted/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-primary/30 group-hover:via-primary/60 group-hover:to-primary/30 transition-all duration-500"></div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{job.title}</h3>
                        {job.isNew && (
                          <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Building className="h-3 w-3 mr-1" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center cursor-help">
                              <span className="text-sm font-medium mr-1">Match:</span>
                              <span className={`text-sm font-bold ${job.matchScore >= 90 ? 'text-green-500' : job.matchScore >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>
                                {job.matchScore}%
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>AI-calculated match based on your skills and experience</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className="relative w-16 h-1.5 mt-1 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className={`absolute top-0 left-0 h-full rounded-full ${job.matchScore >= 90 ? 'bg-green-500' : job.matchScore >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${job.matchScore}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-muted-foreground mt-2">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Posted recently</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="h-7 px-2 text-xs gap-1 bg-primary/90 hover:bg-primary shadow-sm">
                      <ExternalLink className="h-3 w-3" /> Apply Now
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs gap-1">
                      <Star className="h-3 w-3" /> Save
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}