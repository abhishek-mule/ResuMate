"use client"

import { useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { CheckCircle2, Clock, FileText, MoreHorizontal, XCircle, Calendar, BarChart, Plus, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function ApplicationTracker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const applications = {
    active: [
      {
        id: 1,
        company: "TechCorp Inc.",
        position: "Senior Frontend Developer",
        status: "Interview",
        date: "May 15, 2025",
        icon: <Clock className="h-4 w-4 text-amber-500" />,
        color: "bg-amber-500"
      },
      {
        id: 2,
        company: "InnovateTech",
        position: "Full Stack Engineer",
        status: "Applied",
        date: "May 12, 2025",
        icon: <Clock className="h-4 w-4 text-blue-500" />,
        color: "bg-blue-500"
      },
    ],
    completed: [
      {
        id: 3,
        company: "DesignHub",
        position: "UI/UX Developer",
        status: "Accepted",
        date: "Apr 28, 2025",
        icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
        color: "bg-green-500"
      },
      {
        id: 4,
        company: "WebSolutions",
        position: "Frontend Engineer",
        status: "Rejected",
        date: "Apr 15, 2025",
        icon: <XCircle className="h-4 w-4 text-red-500" />,
        color: "bg-red-500"
      },
    ],
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
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
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              <span>Application Tracker</span>
            </CardTitle>
            <CardDescription>
              Track and manage your job applications in one place.
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="p-4">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="active">Active ({applications.active.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({applications.completed.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="space-y-3">
              <AnimatePresence>
                {applications.active.map((app, index) => (
                  <motion.div 
                    key={app.id} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between p-3 border rounded-md bg-card hover:bg-muted/30 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-full min-h-[2.5rem] ${app.color} rounded-full`}></div>
                        <div>
                          <p className="font-medium">{app.position}</p>
                          <p className="text-sm text-muted-foreground">{app.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            {app.icon}
                            <span className="text-sm font-medium">{app.status}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{app.date}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuItem>Add Notes</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500">Remove</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </TabsContent>
            
            <TabsContent value="completed" className="space-y-3">
              <AnimatePresence>
                {applications.completed.map((app, index) => (
                  <motion.div 
                    key={app.id} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between p-3 border rounded-md bg-card hover:bg-muted/30 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-full min-h-[2.5rem] ${app.color} rounded-full`}></div>
                        <div>
                          <p className="font-medium">{app.position}</p>
                          <p className="text-sm text-muted-foreground">{app.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            {app.icon}
                            <span className="text-sm font-medium">{app.status}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{app.date}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Add Notes</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </TabsContent>
          </Tabs>
          
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
                <Plus className="h-4 w-4 mr-1" /> Add New Application
              </span>
              <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}