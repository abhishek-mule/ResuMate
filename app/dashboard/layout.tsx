"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserAccountNav } from "@/components/dashboard/user-account-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Bell, Search, Zap, Star, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New job match found", time: "Just now", isRead: false },
    { id: 2, title: "Resume score updated", time: "2 hours ago", isRead: false },
    { id: 3, title: "Interview scheduled", time: "Yesterday", isRead: true },
  ])
  
  const headerRef = useRef(null)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.9])
  const headerShadow = useTransform(scrollY, [0, 50], ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"])

  useEffect(() => {
    setIsMounted(true)
    
    // Restore sidebar state from localStorage if available
    const savedSidebarState = localStorage.getItem('sidebarCollapsed')
    if (savedSidebarState !== null) {
      setIsSidebarCollapsed(savedSidebarState === 'true')
    }
  }, [])

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  if (!isMounted) {
    return null
  }

  const toggleSidebar = () => {
    const newState = !isSidebarCollapsed
    setIsSidebarCollapsed(newState)
    // Save sidebar state to localStorage
    localStorage.setItem('sidebarCollapsed', String(newState))
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, isRead: true })))
  }

  const unreadCount = notifications.filter(n => !n.isRead).length

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header 
        ref={headerRef}
        className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{ 
          opacity: headerOpacity,
          boxShadow: headerShadow
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px] pr-0">
              <div className="px-2 py-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6 pl-2">
                  <motion.span 
                    className="font-bold text-xl cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    ResuMate
                  </motion.span>
                  <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-auto">
                  <DashboardNav toggleSidebar={() => {}} isCollapsed={false} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center gap-2">
            <motion.span 
              className="font-bold text-xl hidden md:inline-block cursor-pointer"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              ResuMate
            </motion.span>
          </div>
          
          <div className="relative mx-4 flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${isSearchFocused ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-200`} />
              <Input 
                placeholder="Search jobs, resumes, skills..." 
                className={`pl-9 pr-4 py-2 h-9 transition-all duration-300 ${isSearchFocused ? 'ring-2 ring-primary/20 border-primary/50' : ''}`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {isSearchFocused && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Badge variant="outline" className="text-xs bg-muted/50">
                    ⌘ K
                  </Badge>
                </div>
              )}
            </div>
            
            {isSearchFocused && (
              <motion.div 
                className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 p-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xs text-muted-foreground mb-2 px-2">Recent Searches</div>
                <div className="space-y-1">
                  {["Frontend Developer", "React Jobs", "Resume Templates"].map((item, i) => (
                    <div key={i} className="flex items-center px-2 py-1.5 rounded-md hover:bg-muted cursor-pointer">
                      <Search className="h-3.5 w-3.5 text-muted-foreground mr-2" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="flex-1 flex justify-end items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Help & Resources</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex relative overflow-hidden group">
                    <Star className="h-5 w-5 text-muted-foreground group-hover:text-amber-500 transition-colors duration-300" />
                    <span className="absolute inset-0 bg-amber-500/10 transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Upgrade to Pro</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                  {unreadCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 15 
                      }}
                    >
                      {unreadCount}
                    </motion.span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[320px]">
                <div className="flex items-center justify-between py-2 px-4 border-b">
                  <span className="font-medium">Notifications</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="ml-auto">
                      {unreadCount} new
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-xs" onClick={markAllAsRead}>
                      Mark all read
                    </Button>
                  </div>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  <AnimatePresence>
                    {notifications.map((notification, index) => (
                      <motion.div 
                        key={notification.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`py-2 px-4 border-b last:border-0 hover:bg-muted/50 cursor-pointer relative ${notification.isRead ? 'opacity-70' : ''}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`https://avatar.vercel.sh/${notification.id}.png`} />
                              <AvatarFallback>N</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <span className={`font-medium ${notification.isRead ? '' : 'text-primary'}`}>{notification.title}</span>
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.id === 1 && "We found a new job that matches your skills and experience."}
                              {notification.id === 2 && "Your resume score has been updated based on recent changes."}
                              {notification.id === 3 && "Your interview with TechCorp has been scheduled for tomorrow."}
                            </p>
                          </div>
                        </div>
                        {!notification.isRead && (
                          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className="py-2 px-4 border-t">
                  <Button variant="ghost" size="sm" className="w-full justify-center">
                    View all notifications
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ModeToggle />
            
            <UserAccountNav 
              user={{
                name: "John Doe",
                email: "john@example.com",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }}
            />
          </div>
        </div>
      </motion.header>
      
      <div className="flex-1 flex flex-col md:flex-row">
        <motion.div 
          className="hidden md:flex flex-col border-r bg-muted/40 p-4 relative"
          initial={{ x: -240, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            width: isSidebarCollapsed ? 80 : 240,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <DashboardNav isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        </motion.div>
        
        <motion.div 
          className="flex-1 p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          key={pathname}
        >
          {children}
        </motion.div>
      </div>

      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, type: "spring" }}
      >
        <Button 
          size="lg" 
          className="h-12 w-12 rounded-full shadow-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary p-0"
        >
          <Zap className="h-5 w-5" />
          <span className="sr-only">AI Assistant</span>
        </Button>
      </motion.div>
    </div>
  )
}