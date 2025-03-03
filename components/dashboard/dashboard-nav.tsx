"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BarChart3, 
  Briefcase, 
  FileText, 
  Home, 
  MessageSquare, 
  Settings, 
  User,
  Sparkles,
  Lightbulb,
  ChevronRight,
  Star,
  Zap,
  Bookmark,
  Bell,
  ChevronDown
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  badge?: string | number
  badgeColor?: string
  isNew?: boolean
  isHot?: boolean
  isBookmarked?: boolean
  description?: string
  subItems?: NavItem[]
}

export function DashboardNav({ isCollapsed = false, toggleSidebar }) {
  const pathname = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  useEffect(() => {
    // Set active item based on current path
    const matchingItem = navItems.find(item => pathname === item.href || pathname.startsWith(item.href + '/'))
    if (matchingItem) {
      setActiveItem(matchingItem.href)
      
      // Auto-expand parent items if a child is active
      navItems.forEach(item => {
        if (item.subItems) {
          const hasActiveChild = item.subItems.some(subItem => 
            pathname === subItem.href || pathname.startsWith(subItem.href + '/')
          )
          if (hasActiveChild && !expandedItems.includes(item.href)) {
            setExpandedItems(prev => [...prev, item.href])
          }
        }
      })
    }
  }, [pathname, expandedItems])

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-4 w-4" />,
      description: "Overview of your career progress"
    },
    {
      title: "Resume Builder",
      href: "/resume-builder",
      icon: <FileText className="h-4 w-4" />,
      badge: "AI",
      badgeColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      description: "Create and manage your resumes"
    },
    {
      title: "Job Search",
      href: "/job-search",
      icon: <Briefcase className="h-4 w-4" />,
      isHot: true,
      description: "Find jobs matching your skills"
    },
    {
      title: "Applications",
      href: "/dashboard/applications",
      icon: <BarChart3 className="h-4 w-4" />,
      badge: 3,
      badgeColor: "bg-amber-500",
      description: "Track your job applications",
      subItems: [
        {
          title: "Active Applications",
          href: "/dashboard/applications/active",
          icon: <Zap className="h-4 w-4" />,
          description: "View your active job applications"
        },
        {
          title: "Completed Applications",
          href: "/dashboard/applications/completed",
          icon: <Star className="h-4 w-4" />,
          description: "View your completed job applications"
        }
      ]
    },
    {
      title: "Interview Coach",
      href: "/dashboard/interview-coach",
      icon: <MessageSquare className="h-4 w-4" />,
      isNew: true,
      description: "Practice with AI interview simulations"
    },
    {
      title: "Career Insights",
      href: "/dashboard/insights",
      icon: <Lightbulb className="h-4 w-4" />,
      isNew: true,
      description: "Data-driven career recommendations"
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="h-4 w-4" />,
      description: "Manage your personal information"
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-4 w-4" />,
      description: "Configure your account preferences"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const handleNavigation = (e, href) => {
    e.preventDefault()
    setActiveItem(href)
    router.push(href)
  }

  const handleBookmark = (e, href) => {
    e.preventDefault()
    e.stopPropagation()
    // Toggle bookmark logic would go here
    console.log(`Bookmarked ${href}`)
  }

  const toggleExpand = (e, href) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href) 
        : [...prev, href]
    )
  }

  return (
    <div className="relative">
      <motion.button 
        className="absolute -right-4 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 md:block"
        onClick={toggleSidebar}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isCollapsed ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronRight className="h-4 w-4" />
      </motion.button>
      
      <motion.nav 
        className="grid items-start gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              layout
              onHoverStart={() => setHoveredItem(item.href)}
              onHoverEnd={() => setHoveredItem(null)}
              className="relative"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <Link 
                          href={item.href}
                          onClick={(e) => item.subItems ? toggleExpand(e, item.href) : handleNavigation(e, item.href)}
                          className="flex-1"
                        >
                          <Button
                            variant={pathname === item.href ? "secondary" : "ghost"}
                            className={cn(
                              "w-full justify-start relative overflow-hidden group transition-all duration-300",
                              pathname === item.href 
                                ? "bg-primary/10 text-primary font-medium" 
                                : "hover:bg-primary/5"
                            )}
                          >
                            <span className="relative z-10 flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <span className={cn(
                                  "transition-all duration-300",
                                  isCollapsed ? "mr-0" : "mr-2",
                                  pathname === item.href && "text-primary"
                                )}>
                                  {item.icon}
                                </span>
                                {!isCollapsed && (
                                  <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {item.title}
                                  </motion.span>
                                )}
                              </div>
                              
                              {!isCollapsed && item.subItems && (
                                <motion.div
                                  animate={{ rotate: expandedItems.includes(item.href) ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="ml-auto"
                                >
                                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                </motion.div>
                              )}
                            </span>
                            
                            {!isCollapsed && item.badge && !item.subItems && (
                              <motion.span 
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3 }}
                                className={cn(
                                  "ml-auto flex h-5 min-w-5 items-center justify-center rounded-full text-xs font-medium text-white",
                                  item.badgeColor || "bg-primary"
                                )}
                              >
                                {item.badge}
                              </motion.span>
                            )}
                            
                            {!isCollapsed && item.isNew && !item.subItems && (
                              <motion.span 
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-auto text-xs font-medium text-green-500 flex items-center"
                              >
                                <Sparkles className="h-3 w-3 mr-1" />
                                New
                              </motion.span>
                            )}

                            {!isCollapsed && item.isHot && !item.subItems && (
                              <motion.div 
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-auto"
                              >
                                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                                  <Zap className="h-3 w-3 mr-1" />
                                  Hot
                                </Badge>
                              </motion.div>
                            )}
                            
                            {pathname === item.href && (
                              <motion.span 
                                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary/70"
                                layoutId="activeNavIndicator"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                            
                            <motion.span 
                              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                              initial={{ translateX: "-100%" }}
                              animate={{ 
                                translateX: hoveredItem === item.href ? "0%" : "-100%"
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </Button>
                        </Link>

                        {!isCollapsed && !item.subItems && hoveredItem === item.href && (
                          <motion.button
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-6 w-6 flex items-center justify-center rounded-full hover:bg-primary/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => handleBookmark(e, item.href)}
                          >
                            <Bookmark className="h-3.5 w-3.5 text-muted-foreground hover:text-primary transition-colors" />
                          </motion.button>
                        )}
                      </div>
                      
                      {/* Sub-items */}
                      {!isCollapsed && item.subItems && expandedItems.includes(item.href) && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-6 ml-2 border-l-2 border-muted mt-1 space-y-1"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link 
                                  href={subItem.href}
                                  onClick={(e) => handleNavigation(e, subItem.href)}
                                >
                                  <Button
                                    variant={pathname === subItem.href ? "secondary" : "ghost"}
                                    size="sm"
                                    className={cn(
                                      "w-full justify-start text-sm relative overflow-hidden group transition-all duration-300",
                                      pathname === subItem.href 
                                        ? "bg-primary/10 text-primary font-medium" 
                                        : "hover:bg-primary/5"
                                    )}
                                  >
                                    <span className="relative z-10 flex items-center">
                                      <span className="mr-2">{subItem.icon}</span>
                                      <span>{subItem.title}</span>
                                    </span>
                                    
                                    {pathname === subItem.href && (
                                      <motion.span 
                                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/70 to-primary/40"
                                        layoutId="activeSubNavIndicator"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    )}
                                  </Button>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent side="right" className="flex flex-col gap-1">
                      <p className="font-medium">{item.title}</p>
                      {item.description && (
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      )}
                      {item.badge && (
                        <Badge className={cn(
                          "self-start text-white",
                          item.badgeColor || "bg-primary"
                        )}>
                          {item.badge}
                        </Badge>
                      )}
                      {item.isNew && (
                        <Badge className="self-start bg-green-500 text-white border-none">
                          <Sparkles className="h-3 w-3 mr-1" />
                          New
                        </Badge>
                      )}
                      {item.isHot && (
                        <Badge className="self-start bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
                          <Zap className="h-3 w-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                      {item.subItems && (
                        <div className="border-t pt-1 mt-1">
                          <p className="text-xs text-muted-foreground">Subitems:</p>
                          <div className="space-y-1 mt-1">
                            {item.subItems.map((subItem, i) => (
                              <p key={i} className="text-xs flex items-center">
                                {subItem.icon}
                                <span className="ml-1">{subItem.title}</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </AnimatePresence>

        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 pt-6 border-t"
          >
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Bell className="h-4 w-4 text-primary mr-2" />
                <h4 className="font-medium text-sm">Pro Features</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Upgrade to access advanced AI resume analysis and unlimited job applications.
              </p>
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                <Star className="h-3.5 w-3.5 mr-1.5" /> Upgrade Now
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}