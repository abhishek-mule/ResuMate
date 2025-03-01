"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  Briefcase, 
  FileText, 
  Home, 
  MessageSquare, 
  Settings, 
  User,
  Sparkles,
  BookOpen,
  BarChart,
  Zap
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  badge?: string
  isNew?: boolean
}

export function DashboardNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Resume Builder",
      href: "/resume-builder",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Job Search",
      href: "/job-search",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
      badge: "5 new",
    },
    {
      title: "Applications",
      href: "/dashboard/applications",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Interview Coach",
      href: "/dashboard/interview-coach",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
      isNew: true,
    },
    {
      title: "Career Insights",
      href: "/dashboard/career-insights",
      icon: <BarChart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Learning Hub",
      href: "/dashboard/learning",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
    },
    {
      title: "AI Assistant",
      href: "/dashboard/ai-assistant",
      icon: <Sparkles className="mr-2 h-4 w-4" />,
      isNew: true,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <motion.nav 
      className="grid items-start gap-1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.05 }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
        >
          <Link href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start relative overflow-hidden group transition-all duration-300",
                pathname === item.href 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "hover:bg-muted/50"
              )}
            >
              <span className="relative z-10 flex items-center">
                {item.icon}
                {item.title}
              </span>
              
              {item.badge && (
                <Badge variant="outline" className="ml-auto text-xs py-0 h-5 border-primary/20 bg-primary/5">
                  {item.badge}
                </Badge>
              )}
              
              {item.isNew && (
                <Badge className="ml-auto text-xs py-0 h-5 bg-green-500 text-white">
                  New
                </Badge>
              )}
              
              {pathname === item.href && (
                <motion.span 
                  className="absolute left-0 top-0 h-full w-1 bg-primary"
                  layoutId="activeNavIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </motion.div>
      ))}
      
      <div className="mt-6 px-3">
        <div className="rounded-md bg-gradient-to-r from-primary/20 to-primary/5 p-3">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Upgrade to Pro</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Get advanced features and priority support
          </p>
          <Button size="sm" className="w-full text-xs bg-primary/90 hover:bg-primary">
            Upgrade Now
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}