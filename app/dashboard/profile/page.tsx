"use client"

import { motion } from "framer-motion"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProfileStats } from "@/components/dashboard/profile-stats"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Settings, Share2, Shield, Star, Upload } from "lucide-react"

// Mock data - replace with real data in production
const user = {
  name: "John Doe",
  email: "john@example.com",
  image: "https://github.com/shadcn.png",
  role: "Software Engineer",
  location: "San Francisco, CA",
  bio: "Passionate software engineer with 5+ years of experience in full-stack development.",
  skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
  stats: {
    applications: 25,
    interviews: 8,
    offers: 3,
    profileViews: 142
  }
}

export default function ProfilePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Profile"
        text="Manage your profile and account settings"
      />
      
      <div className="grid gap-8">
        {/* Profile Header */}
        <Card className="border-2">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="relative group"
              >
                <Avatar className="w-24 h-24 border-4 border-background">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 bg-background border-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </motion.div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-muted-foreground">{user.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                      <Settings className="h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Shield className="h-3 w-3" /> Verified Profile
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Star className="h-3 w-3" /> Pro Member
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <FileText className="h-3 w-3" /> 3 Active Resumes
                  </Badge>
                </div>
                
                <p className="text-muted-foreground">{user.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Stats */}
        <ProfileStats stats={user.stats} />

        {/* Profile Tabs */}
        <Tabs defaultValue="about" className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="resumes">Resumes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">{user.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resumes">
            <Card>
              <CardHeader>
                <CardTitle>My Resumes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">Coming soon...</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">Coming soon...</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}