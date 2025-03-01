"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2, Clock, FileText, MoreHorizontal, XCircle, Calendar, BarChart } from "lucide-react"
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
  const isInView = useInView(ref, { once: true })
  
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
                <BarChart className="h-5 w-5 text-primary" />
                <span>Application Tracker</span>
              </CardTitle>
              <CardDescription>
                Track and manage your job applications in one place.
              </CardDescription>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 gap-1 border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                Add Application
              </Button>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Tabs defaultValue="active">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="active" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Active ({applications.active.length})
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Completed ({applications.completed.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-3 mt-0">
              {applications.active.map((app, index) => (
                <motion.div 
                  key={app.id} 
                  variants={cardVariants}
                  whileHover={{ scale: 1.01 }}
                  className="group"
                >
                  <ApplicationItem application={app} />
                </motion.div>
              ))}
            </TabsContent>
            <TabsContent value="completed" className="space-y-3 mt-0">
              {applications.completed.map((app, index) => (
                <motion.div 
                  key={app.id} 
                  variants={cardVariants}
                  whileHover={{ scale: 1.01 }}
                  className="group"
                >
                  <ApplicationItem application={app} />
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ApplicationItem({ application }: { application: any }) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-md bg-card hover:bg-muted/30 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300" style={{ backgroundColor: application.color }}></div>
      
      <div className="flex items-center gap-3 pl-2">
        <div className="flex-shrink-0">
          {application.icon}
        </div>
        <div>
          <p className="font-medium">{application.position}</p>
          <p className="text-xs text-muted-foreground">{application.company}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-right">
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="h-5 px-1.5 text-xs font-normal border-none bg-muted">
              {application.status}
            </Badge>
          </div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{application.date}</span>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Update Status</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Add Notes</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500 cursor-pointer">Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}