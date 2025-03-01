import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Briefcase, 
  Building, 
  Clock, 
  DollarSign, 
  Filter, 
  MapPin, 
  Search, 
  Sparkles, 
  Star 
} from "lucide-react"

export default function JobSearchPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Job Search"
        text="Find and apply to jobs that match your skills and experience."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Job title, company, or keywords" 
                    className="pl-9"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Location or remote" 
                    className="pl-9"
                  />
                </div>
                <Button className="gap-2">
                  <Search className="h-4 w-4" /> Search
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="recommended">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
            
            <TabsContent value="recommended" className="space-y-4 mt-0">
              {[
                {
                  title: "Senior Frontend Developer",
                  company: "TechCorp Inc.",
                  location: "San Francisco, CA (Remote)",
                  salary: "$120K - $150K",
                  posted: "2 days ago",
                  matchScore: 92,
                  isNew: true
                },
                {
                  title: "Full Stack Engineer",
                  company: "InnovateTech",
                  location: "New York, NY (Hybrid)",
                  salary: "$110K - $140K",
                  posted: "1 week ago",
                  matchScore: 87,
                  isNew: true
                },
                {
                  title: "UI/UX Developer",
                  company: "DesignHub",
                  location: "Austin, TX (Remote)",
                  salary: "$100K - $130K",
                  posted: "3 days ago",
                  matchScore: 81,
                  isNew: false
                },
                {
                  title: "React Native Developer",
                  company: "MobileFirst",
                  location: "Chicago, IL (On-site)",
                  salary: "$115K - $135K",
                  posted: "Just now",
                  matchScore: 79,
                  isNew: true
                },
                {
                  title: "Frontend Team Lead",
                  company: "Enterprise Solutions",
                  location: "Boston, MA (Hybrid)",
                  salary: "$130K - $160K",
                  posted: "5 days ago",
                  matchScore: 76,
                  isNew: false
                }
              ].map((job, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-lg">{job.title}</h3>
                            {job.isNew && <Badge className="bg-green-500">New</Badge>}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building className="h-3 w-3 mr-1" />
                            <span>{job.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-1">Match:</span>
                            <span className="text-sm font-bold text-green-500">{job.matchScore}%</span>
                          </div>
                          <Progress value={job.matchScore} className="h-1.5 w-16 mt-1" />
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground mt-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t flex justify-between items-center">
                        <div className="flex gap-2">
                          <Button className="gap-1">Apply Now</Button>
                          <Button variant="outline" size="icon">
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center text-sm">
                          <Sparkles className="h-4 w-4 text-primary mr-1" />
                          <span className="text-primary font-medium">AI Matched</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="recent" className="mt-0">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">Your recent job searches will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="saved" className="mt-0">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">Your saved jobs will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Preferences</CardTitle>
              <CardDescription>
                Update your preferences to get better job matches
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Job Types</h3>
                <div className="flex flex-wrap gap-2">
                  {["Full-time", "Part-time", "Contract", "Remote"].map((type, i) => (
                    <Badge key={i} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Salary Range</h3>
                <div className="flex items-center gap-2">
                  <Input placeholder="Min" className="w-24" />
                  <span>-</span>
                  <Input placeholder="Max" className="w-24" />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Experience Level</h3>
                <div className="flex flex-wrap gap-2">
                  {["Entry", "Mid-Level", "Senior", "Lead", "Executive"].map((level, i) => (
                    <Badge key={i} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full">Update Preferences</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Skills Analysis</CardTitle>
              <CardDescription>
                Based on your resume and job interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">React</span>
                  <span className="text-sm font-medium">Expert</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">TypeScript</span>
                  <span className="text-sm font-medium">Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Next.js</span>
                  <span className="text-sm font-medium">Intermediate</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Node.js</span>
                  <span className="text-sm font-medium">Intermediate</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="pt-2 mt-2 border-t">
                <h3 className="text-sm font-medium mb-2">Trending Skills in Your Field</h3>
                <div className="flex flex-wrap gap-2">
                  {["GraphQL", "AWS", "Docker", "Tailwind CSS", "React Native"].map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}