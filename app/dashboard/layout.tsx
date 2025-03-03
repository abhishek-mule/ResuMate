"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserAccountNav } from "@/components/dashboard/user-account-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New job match found", time: "Just now" },
    { id: 2, title: "Resume score updated", time: "2 hours ago" },
    { id: 3, title: "Interview preparation tips", time: "Yesterday" },
  ])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <motion.header 
        className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 hover:bg-primary/10 transition-colors duration-200">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] border-r border-primary/10">
                <div className="flex h-16 items-center border-b px-4">
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden">
                      <img 
                        src="https://api.deepai.org/job-view-file/1ea346c0-1fd9-4965-a1e7-59013113b3b5/outputs/output.jpg" 
                        alt="ResumeAI Logo" 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">ResumeAI</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="ml-auto hover:bg-primary/10 transition-colors duration-200" 
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="py-6 px-2">
                  <DashboardNav />
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <img 
                  src="https://api.deepai.org/job-view-file/1ea346c0-1fd9-4965-a1e7-59013113b3b5/outputs/output.jpg" 
                  alt="ResumeAI Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">ResumeAI</span>
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:gap-3">
            <div className="relative h-8 w-8 overflow-hidden">
              <img 
                src="https://api.deepai.org/job-view-file/1ea346c0-1fd9-4965-a1e7-59013113b3b5/outputs/output.jpg" 
                alt="ResumeAI Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">ResumeAI</span>
          </div>
          
          <div className="hidden md:flex mx-auto max-w-md w-full px-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search jobs, resumes, or skills..." 
                className="pl-9 bg-muted/40 border-muted focus:bg-background transition-all duration-200"
              />
            </div>
          </div>
          
          <div className="ml-auto flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-primary/10 transition-colors duration-200"
                >
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center"
                    >
                      <Badge className="h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground">
                        {notifications.length}
                      </Badge>
                    </motion.div>
                  )}
                  
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden border border-primary/10">
                <div className="flex items-center justify-between p-4 border-b bg-muted/30">
                  <span className="font-medium">Notifications</span>
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-sm hover:text-primary transition-colors">
                    Mark all as read
                  </Button>
                </div>
                <div className="max-h-96 overflow-auto">
                  {notifications.map((notification, index) => (
                    <DropdownMenuItem 
                      key={notification.id} 
                      className="p-4 cursor-pointer hover:bg-muted/50 transition-colors duration-200 border-b border-border/50 last:border-0"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bell className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-medium">{notification.title}</span>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
                <div className="p-3 border-t bg-muted/30 text-center">
                  <Button variant="ghost" size="sm" className="w-full text-sm hover:bg-primary/10 transition-colors">
                    View all notifications
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex hover:bg-primary/10 transition-colors duration-200"
            >
              <Settings className="h-5 w-5" />
            </Button>
            
            <ModeToggle />
            
            <UserAccountNav user={user} />
          </div>
        </div>
      </motion.header>
      
      <div className="flex flex-1">
        <AnimatePresence>
          <motion.aside 
            className="hidden md:flex md:w-64 md:flex-col md:border-r border-primary/10"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex flex-col gap-4 p-4 h-full">
              <div className="py-2">
                <DashboardNav />
              </div>
              
              <div className="mt-auto">
                <div className="rounded-lg border border-primary/10 bg-muted/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-medium">Pro Tips</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete your profile to get better job matches and increase your visibility to employers.
                  </p>
                  <Button size="sm" variant="outline" className="w-full border-primary/20 hover:bg-primary/10 transition-colors">
                    Update Profile
                  </Button>
                </div>
              </div>
            </div>
          </motion.aside>
        </AnimatePresence>
        
        <main className="flex-1 bg-muted/10">
          <div className="container p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}