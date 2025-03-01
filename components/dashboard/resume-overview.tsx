"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Plus, Upload, Edit, Trash, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ResumeOverview() {
  const [open, setOpen] = useState(false)
  const [resumes, setResumes] = useState([
    { id: 1, name: "Software Developer Resume", lastUpdated: "2 days ago", isNew: true },
    { id: 2, name: "Product Manager Resume", lastUpdated: "1 week ago", isNew: false }
  ])
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleCreateResume = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    
    if (name) {
      setResumes([...resumes, { id: resumes.length + 1, name, lastUpdated: "Just now", isNew: true }])
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
                  <Button size="sm" className="h-8 gap-1 bg-primary/90 hover:bg-primary shadow-sm">
                    <Plus className="h-4 w-4" /> New
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
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="gap-2">
                      <FileText className="h-4 w-4" /> Create with AI
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            {resumes.map((resume, index) => (
              <motion.div 
                key={resume.id} 
                variants={cardVariants}
                className="group"
              >
                <div className="flex items-center justify-between p-3 border rounded-md bg-card hover:bg-muted/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <FileText className="h-5 w-5 text-primary" />
                      {resume.isNew && (
                        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500"></span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{resume.name}</p>
                      <p className="text-xs text-muted-foreground">Updated {resume.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
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
                          <Button variant="ghost" size="icon" className="h-8 w-8">
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