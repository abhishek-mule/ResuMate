"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])
  
  const features = [
    {
      title: "AI Resume Builder",
      description: "Create professional resumes with AI assistance",
      href: "/resume-builder",
      isNew: true
    },
    {
      title: "Job Matching",
      description: "Find jobs that match your skills and experience",
      href: "/job-search"
    },
    {
      title: "Interview Coach",
      description: "Practice and perfect your interview skills",
      href: "/interview-coach",
      isNew: true
    },
    {
      title: "Career Insights",
      description: "Get data-driven insights for your career",
      href: "/career-insights"
    }
  ]
  
  return (
    <motion.div 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <motion.span 
              className="hidden font-bold sm:inline-block text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotate: 360 }}
            >
              ResuMate
            </motion.span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {features.map((feature, index) => (
                        <li key={index} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              href={feature.href}
                              className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md hover:bg-muted/80 transition-colors"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-sm font-medium leading-none">{feature.title}</div>
                                {feature.isNew && (
                                  <Badge className="bg-green-500 text-white">
                                    <Sparkles className="h-3 w-3 mr-1" />
                                    New
                                  </Badge>
                                )}
                              </div>
                              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {feature.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </motion.div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[350px] pr-0">
            <div className="px-2 py-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6 pl-2">
                <motion.span 
                  className="font-bold text-xl cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  ResuMate
                </motion.span>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex-1 overflow-auto space-y-6">
                <div className="space-y-2">
                  <Link href="/" className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 px-3">
                      <span className="font-medium">Features</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="pl-4 space-y-1 border-l-2 border-muted ml-3">
                      {features.map((feature, index) => (
                        <Link 
                          key={index} 
                          href={feature.href} 
                          className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div>
                            <div>{feature.title}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                          {feature.isNew && (
                            <Badge className="bg-green-500 text-white text-xs">New</Badge>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/pricing" className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Pricing
                  </Link>
                  
                  <Link href="/about" className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <Link 
                    href="/login" 
                    className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup" 
                    className="flex items-center py-2 px-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center">
            <motion.span 
              className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              ResuMate
            </motion.span>
          </Link>
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <ModeToggle />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/login">
                <Button variant="ghost" className="relative overflow-hidden group">
                  <span className="relative z-10">Login</span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link href="/signup">
                <Button className="relative overflow-hidden group">
                  <span className="relative z-10">Sign Up</span>
                  <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.div>
  )
}