"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FileText, Plus, Upload, Edit, Trash, Download, Star, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

export function ResumeOverview() {
  const [open, setOpen] = useState(false)
  const [resumes, setResumes] = useState([
    { 
      id: 1, 
      name: "Software Developer Resume", 
      lastUpdated: "2 days ago", 
      isNew: true,
      score: 85,
      status: "Active",
      views: 12
    },
    { 
      id: 2, 
      name: "Product Manager Resume", 
      lastUpdated: "1 week ago", 
      isNew: false,
      score: 72,
      status: "Needs Improvement",
      views: 5
    }
  ])
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const handleCreateResume = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    
    if (name) {
      setResumes([...resumes, { 
        id: resumes.length + 1, 
        name, 
        lastUpdated: "Just now", 
        isNew: true,
        score: 50,
        status: "Draft",
        views: 0
      }])
      setOpen(false)
    }
  }

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
                <FileText className="h-5 w-5 text-primary" />
                <span>My Resumes</span>
              </CardTitle>
              <CardDescription>
                Manage and create professional resumes tailored to your target roles.
              </CardDescription>
            </motion.div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <motion.div variants={cardVariants}>
                  <Button 
                    size="sm" 
                    className="h-8 gap-1 bg-primary/90 hover:bg-primary shadow-sm group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <Plus className="h-4 w-4 mr-1" /> New Resume
                    </span>
                    <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Resume</DialogTitle>
                  <DialogDescription>
                    Create a new resume from scratch or use AI to generate one based on your profile.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateResume}>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Resume Name</Label>
                      <Input id="name" name="name" placeholder="e.g. Software Engineer Resume" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="template">Template</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Professional", "Modern", "Creative"].map((template, i) => (
                          <div 
                            key={i} 
                            className="border rounded-md p-2 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200"
                          >
                            <div className="aspect-[8.5/11] bg-muted mb-1 flex items-center justify-center">
                              <FileText className="h-6 w-6 text-muted-foreground/40" />
                            </div>
                            <span className="text-xs">{template}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="flex flex-col sm:flex-row gap-2">
                    <Button type="submit" className="gap-2 w-full sm:w-auto">
                      <FileText className="h-4 w-4" /> Create Manually
                    </Button>
                    <Button type="submit" variant="secondary" className="gap-2 w-full sm:w-auto">
                      <Star className="h-4 w-4" /> Create with AI
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            <AnimatePresence>
              {resumes.map((resume, index) => (
                <motion.div 
                  key={resume.id} 
                  variants={cardVariants}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group"
                  layout
                >
                  <div className="flex items-center justify-between p-3 border rounded-md bg-card hover:bg-muted/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="relative w-10 h-12 bg-muted/50 rounded-sm flex items-center justify-center border overflow-hidden group-hover:border-primary transition-colors duration-300">
                          <FileText className="h-5 w-5 text-primary" />
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-1"
                            style={{ 
                              backgroundColor: resume.score >= 80 ? 'rgb(34, 197, 94)' : resume.score >= 60 ? 'rgb(234, 179, 8)' : 'rgb(239, 68, 68)',
                              width: `${resume.score}%`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${resume.score}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                        {resume.isNew && (
                          <motion.span 
                            className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ 
                              repeat: 3,
                              repeatType: "reverse",
                              duration: 1,
                              delay: index * 0.2 + 1
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{resume.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs flex items-center text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" /> {resume.lastUpdated}
                          </span>
                          <span className="text-xs flex items-center text-muted-foreground">
                            <Star className="h-3 w-3 mr-1" /> Score: {resume.score}%
                          </span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              resume.status === 'Active' 
                                ? 'bg-green-500/10 text-green-600 border-green-200 dark:border-green-900' 
                                : resume.status === 'Draft' 
                                ? 'bg-amber-500/10 text-amber-600 border-amber-200 dark:border-amber-900'
                                : 'bg-red-500/10 text-red-600 border-red-200 dark:border-red-900'
                            }`}
                          >
                            {resume.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit Resume</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                              <Download className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Download</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="outline" className="w-full gap-2 group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              <Upload className="h-4 w-4 mr-2" /> Upload Existing Resume
            </span>
            <span className="absolute inset-0 bg-primary/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}