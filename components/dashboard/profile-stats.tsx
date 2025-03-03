"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, FileText, Star, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ProfileStatsProps {
  stats: {
    applications: number
    interviews: number
    offers: number
    profileViews: number
  }
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  const statsItems = [
    {
      label: "Applications",
      value: stats.applications,
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Interviews",
      value: stats.interviews,
      icon: FileText,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Offers",
      value: stats.offers,
      icon: Award,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      label: "Profile Views",
      value: stats.profileViews,
      icon: Star,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-background to-muted/30 border"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`${item.bgColor} ${item.color} p-3 rounded-full mb-3`}
              >
                <item.icon className="h-5 w-5" />
              </motion.div>
              <span className="text-2xl font-bold mb-1">{item.value}</span>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Profile Strength</span>
              <div className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center mr-2"
                >
                  <Zap className="h-4 w-4 text-amber-500 mr-1" />
                  <span className="font-medium">85%</span>
                </motion.div>
              </div>
            </div>
            <div className="relative">
              <Progress value={85} className="h-2" />
              <motion.div
                className="absolute top-0 left-[85%] h-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="h-3 w-3 rounded-full bg-primary -mt-0.5" />
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Resume Score", value: 92, color: "text-green-500" },
              { label: "Skills Match", value: 88, color: "text-blue-500" },
              { label: "Profile Views", value: 78, color: "text-purple-500" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <div className="relative">
                  <Progress value={metric.value} className="h-1.5" />
                  <span className={`absolute right-0 top-0 text-xs font-medium ${metric.color}`}>
                    {metric.value}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}