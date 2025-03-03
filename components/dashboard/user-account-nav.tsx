"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Crown,
  Star,
  Zap,
  Shield,
  Award,
  Briefcase,
  FileText
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface UserAccountNavProps {
  user: {
    name: string
    email: string
    image: string
  }
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild>
        <motion.div
          className="relative cursor-pointer flex items-center gap-2 p-1 rounded-full hover:bg-muted/50 transition-colors duration-200"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="hidden md:flex flex-col items-end mr-1">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
          <div className="relative">
            <Avatar className="h-8 w-8 border-2 border-transparent transition-all duration-300 hover:border-primary">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <DropdownMenuLabel className="font-normal p-0">
            <div className="flex flex-col p-4 gap-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-t-md">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20">
                      <Crown className="h-3 w-3 mr-1 text-amber-500" />
                      <span>Pro</span>
                    </Badge>
                  </div>
                  <p className="text-xs leading-none text-muted-foreground mt-1">
                    {user.email}
                  </p>
                  <div className="flex items-center mt-2">
                    <Star className="h-3 w-3 text-amber-500 mr-1" />
                    <Star className="h-3 w-3 text-amber-500 mr-1" />
                    <Star className="h-3 w-3 text-amber-500 mr-1" />
                    <Star className="h-3 w-3 text-amber-500 mr-1" />
                    <Star className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground ml-1">4.0</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Profile Completion</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-1.5" />
              </div>
            </div>
          </DropdownMenuLabel>
        </motion.div>
        
        <DropdownMenuGroup className="p-2">
          <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 gap-2">
            <Link href="/dashboard/profile" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <Badge variant="outline" className="ml-auto text-xs py-0 h-5">85%</Badge>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 gap-2">
            <Link href="/dashboard/settings" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 gap-2">
            <Link href="/dashboard/billing" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <Badge className="ml-auto bg-amber-500 text-white text-xs py-0 h-5">Pro</Badge>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <div className="grid grid-cols-3 gap-1">
            <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 flex flex-col items-center justify-center h-20 gap-1">
              <Link href="/dashboard/resumes" className="flex flex-col items-center justify-center w-full h-full">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs mt-1">Resumes</span>
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 flex flex-col items-center justify-center h-20 gap-1">
              <Link href="/dashboard/applications" className="flex flex-col items-center justify-center w-full h-full">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs mt-1">Applications</span>
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 flex flex-col items-center justify-center h-20 gap-1">
              <Link href="/dashboard/insights" className="flex flex-col items-center justify-center w-full h-full">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs mt-1">Insights</span>
              </Link>
            </DropdownMenuItem>
          </div>
        </div>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 p-2">
          <Link href="/dashboard/help" className="flex items-center">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 p-2">
          <Link href="/dashboard/feedback" className="flex items-center">
            <Star className="mr-2 h-4 w-4" />
            <span>Feedback</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild className="cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 focus:bg-red-50 dark:focus:bg-red-950/20 p-2">
          <Link href="/" className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
        
        <div className="p-2 pt-0">
          <div className="text-xs text-center text-muted-foreground mt-2">
            ResuMate Pro • v2.5.0
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}