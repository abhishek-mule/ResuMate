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
  Shield,
  HelpCircle,
  Bell,
  Bookmark
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface UserAccountNavProps {
  user: {
    name: string
    email: string
    image: string
  }
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          className="relative cursor-pointer flex items-center gap-2 p-1 rounded-full hover:bg-muted/50 transition-colors duration-200"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Avatar className="h-8 w-8 border-2 border-primary/20 transition-all duration-300 hover:border-primary">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-sm">
            <p className="font-medium leading-none">{user.name}</p>
            <p className="text-xs text-muted-foreground">Free Plan</p>
          </div>
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
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-0 border border-primary/10" align="end" forceMount>
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{user.email}</p>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="outline" className="text-xs py-0 h-5 border-primary/20 bg-primary/5">
                  Free Plan
                </Badge>
                <Badge variant="outline" className="text-xs py-0 h-5 border-green-500/20 bg-green-500/5 text-green-500">
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-2">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-muted/50 focus:bg-muted/50">
              <Link href="/dashboard/profile" className="flex items-center">
                <User className="mr-3 h-4 w-4 text-primary" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-muted/50 focus:bg-muted/50">
              <Link href="/dashboard/settings" className="flex items-center">
                <Settings className="mr-3 h-4 w-4 text-primary" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-muted/50 focus:bg-muted/50">
              <Link href="/dashboard/saved-jobs" className="flex items-center">
                <Bookmark className="mr-3 h-4 w-4 text-primary" />
                <span>Saved Jobs</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-muted/50 focus:bg-muted/50">
              <Link href="/dashboard/notifications" className="flex items-center">
                <Bell className="mr-3 h-4 w-4 text-primary" />
                <span>Notifications</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </div>
        
        <div className="p-2 border-t">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-muted/50 focus:bg-muted/50">
              <Link href="/help" className="flex items-center">
                <HelpCircle className="mr-3 h-4 w-4 text-primary" />
                <span>Help & Support</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-muted/50 focus:bg-muted/50">
              <Link href="/privacy" className="flex items-center">
                <Shield className="mr-3 h-4 w-4 text-primary" />
                <span>Privacy Policy</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </div>
        
        <div className="p-2 border-t">
          <DropdownMenuItem asChild className="p-3 cursor-pointer hover:bg-red-50 focus:bg-red-50 dark:hover:bg-red-950/20 dark:focus:bg-red-950/20 text-red-500 hover:text-red-600 focus:text-red-600">
            <Link href="/" className="flex items-center">
              <LogOut className="mr-3 h-4 w-4" />
              <span>Log out</span>
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}