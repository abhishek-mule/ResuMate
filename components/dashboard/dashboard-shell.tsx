"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div 
      ref={ref}
      className="flex min-h-screen flex-col space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex-1 space-y-6 p-0 md:p-4">
        {children}
      </div>
    </motion.div>
  )
}