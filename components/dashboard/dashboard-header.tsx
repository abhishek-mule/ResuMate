"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

interface DashboardHeaderProps {
  heading: string
  text?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function DashboardHeader({
  heading,
  text,
  action
}: DashboardHeaderProps) {
  return (
    <motion.div 
      className="flex flex-col gap-1 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <motion.h1 
          className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {heading}
        </motion.h1>
        
        {action && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button onClick={action.onClick} className="gap-2 bg-primary/90 hover:bg-primary shadow-sm">
              {action.label}
            </Button>
          </motion.div>
        )}
      </div>
      
      {text && (
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-muted-foreground">{text}</p>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:bg-primary/10 transition-colors">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </motion.div>
      )}
      
      <motion.div 
        className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-2"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 80, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />
    </motion.div>
  )
}