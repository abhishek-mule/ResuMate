"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ResumeOverview } from "@/components/dashboard/resume-overview"
import { JobMatches } from "@/components/dashboard/job-matches"
import { ApplicationTracker } from "@/components/dashboard/application-tracker"
import { ImprovementSuggestions } from "@/components/dashboard/improvement-suggestions"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Sparkles, BarChart3, TrendingUp, Calendar } from "lucide-react"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Welcome back, John"
        text="Manage your resumes, job applications, and career progress."
        action={{
          label: "Create New Resume",
          onClick: () => console.log("Create new resume")
        }}
      />
      
      {/* Stats Overview */}
      {!isLoading && (
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { 
              title: "Resume Views", 
              value: "124", 
              change: "+12%", 
              icon: <Sparkles className="h-5 w-5 text-primary" />,
              color: "bg-blue-500/10 text-blue-500"
            },
            { 
              title: "Applications", 
              value: "8", 
              change: "+2", 
              icon: <BarChart3 className="h-5 w-5 text-primary" />,
              color: "bg-green-500/10 text-green-500"
            },
            { 
              title: "Job Matches", 
              value: "32", 
              change: "New", 
              icon: <TrendingUp className="h-5 w-5 text-primary" />,
              color: "bg-amber-500/10 text-amber-500"
            },
            { 
              title: "Interviews", 
              value: "2", 
              change: "Upcoming", 
              icon: <Calendar className="h-5 w-5 text-primary" />,
              color: "bg-purple-500/10 text-purple-500"
            }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
              <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${stat.color} flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-medium">
                    <span className={stat.color}>{stat.change}</span>
                    <span className="text-muted-foreground ml-1">this week</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-20 w-full mb-4" />
              <Skeleton className="h-8 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-20 w-full mb-4" />
              <Skeleton className="h-8 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-20 w-full mb-4" />
              <Skeleton className="h-8 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-20 w-full mb-4" />
              <Skeleton className="h-8 w-full" />
            </CardContent>
          </Card>
        </div>
      ) : (
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
            <ResumeOverview />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
            <JobMatches />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
            <ApplicationTracker />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="transition-all duration-300">
            <ImprovementSuggestions />
          </motion.div>
        </motion.div>
      )}
    </DashboardShell>
  )
}