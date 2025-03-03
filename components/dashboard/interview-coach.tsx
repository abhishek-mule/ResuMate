"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  Users,
  Code,
  MessageSquare,
  Activity,
  Trophy,
  Play,
  Clock,
  Star,
  BarChart,
  Zap
} from "lucide-react"

const features = [
  {
    id: "group-discussions",
    title: "Group Discussions",
    description: "AI-moderated group discussions to improve communication skills",
    icon: <Users className="w-5 h-5" />,
    stats: { completed: 3, total: 10 }
  },
  {
    id: "aptitude",
    title: "Adaptive Aptitude Tests",
    description: "Dynamic tests that adjust to your skill level",
    icon: <Brain className="w-5 h-5" />,
    stats: { completed: 5, total: 15 }
  },
  {
    id: "technical",
    title: "Technical Evaluations",
    description: "Live coding challenges with real-time feedback",
    icon: <Code className="w-5 h-5" />,
    stats: { completed: 2, total: 8 }
  },
  {
    id: "hr-feedback",
    title: "HR Interview Simulator",
    description: "Real-time feedback on your responses and body language",
    icon: <MessageSquare className="w-5 h-5" />,
    stats: { completed: 4, total: 12 }
  },
  {
    id: "stress",
    title: "Stress Interview",
    description: "Prepare for high-pressure interview scenarios",
    icon: <Activity className="w-5 h-5" />,
    stats: { completed: 1, total: 5 }
  }
]

const mockInterviews = [
  {
    company: "TechCorp",
    role: "Senior Frontend Developer",
    date: "Tomorrow, 2:00 PM",
    difficulty: "Advanced",
    duration: "45 mins",
    interviewer: "AI Virtual Interviewer",
    topics: ["React", "System Design", "Problem Solving"]
  },
  {
    company: "InnovateTech",
    role: "Full Stack Engineer",
    date: "Next Week",
    difficulty: "Intermediate",
    duration: "60 mins",
    interviewer: "Industry Expert",
    topics: ["Node.js", "Database Design", "API Development"]
  }
]

const performanceData = {
  confidence: 85,
  technicalSkills: 78,
  communication: 92,
  problemSolving: 88,
  overallScore: 86
}

export function InterviewCoach() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-8">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 bg-muted p-1 rounded-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Overall Score</p>
                    <h3 className="text-2xl font-bold">{performanceData.overallScore}%</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Play className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Interviews Completed</p>
                    <h3 className="text-2xl font-bold">15</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Clock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Practice Hours</p>
                    <h3 className="text-2xl font-bold">24</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Star className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Expert Sessions</p>
                    <h3 className="text-2xl font-bold">5</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interview Features */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <Badge variant="secondary">
                        {feature.stats.completed}/{feature.stats.total}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {Math.round((feature.stats.completed / feature.stats.total) * 100)}%
                        </span>
                      </div>
                      <Progress
                        value={(feature.stats.completed / feature.stats.total) * 100}
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Interviews */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Mock Interviews</CardTitle>
              <CardDescription>Scheduled practice sessions with AI and experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockInterviews.map((interview, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{interview.company}</h4>
                        <Badge variant="secondary">{interview.difficulty}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{interview.role}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{interview.date}</span>
                        <span>•</span>
                        <span>{interview.duration}</span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm">
                        <Zap className="w-4 h-4 mr-1" />
                        Join Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tabs will be implemented in subsequent updates */}
        <TabsContent value="practice" className="space-y-6">
          {/* Interview Types */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
              <CardHeader>
                <div className="p-2 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="mt-4">AI Interview Simulator</CardTitle>
                <CardDescription>Practice with our AI interviewer that adapts to your responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Speech Recognition</Badge>
                    <Badge variant="outline">Real-time Feedback</Badge>
                  </div>
                  <Button className="w-full">Start Practice</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
              <CardHeader>
                <div className="p-2 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-500" />
                </div>
                <CardTitle className="mt-4">Technical Interview</CardTitle>
                <CardDescription>Live coding challenges with real-time evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Code Analysis</Badge>
                    <Badge variant="outline">Multiple Languages</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Choose Challenge</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
              <CardHeader>
                <div className="p-2 w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-500" />
                </div>
                <CardTitle className="mt-4">Group Discussion</CardTitle>
                <CardDescription>Practice group discussions with AI participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Multi-participant</Badge>
                    <Badge variant="outline">Leadership Skills</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Join Session</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
              <CardHeader>
                <div className="p-2 w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-amber-500" />
                </div>
                <CardTitle className="mt-4">Aptitude Assessment</CardTitle>
                <CardDescription>Adaptive tests that match your skill level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Dynamic Difficulty</Badge>
                    <Badge variant="outline">Instant Results</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Take Test</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
              <CardHeader>
                <div className="p-2 w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-purple-500" />
                </div>
                <CardTitle className="mt-4">Stress Interview</CardTitle>
                <CardDescription>Handle challenging and pressure situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Pressure Handling</Badge>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Start Simulation</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
              <CardHeader>
                <div className="p-2 w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-red-500" />
                </div>
                <CardTitle className="mt-4">Expert Review</CardTitle>
                <CardDescription>Get feedback from industry professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Live Session</Badge>
                    <Badge variant="outline">Personalized</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Book Session</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Practice History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Practice Sessions</CardTitle>
              <CardDescription>Track your interview preparation progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    type: "AI Interview",
                    date: "Today",
                    duration: "45 mins",
                    score: 85,
                    strengths: ["Communication", "Technical Knowledge"],
                    improvements: ["Body Language"]
                  },
                  {
                    type: "Technical Challenge",
                    date: "Yesterday",
                    duration: "60 mins",
                    score: 92,
                    strengths: ["Problem Solving", "Code Quality"],
                    improvements: ["Time Management"]
                  }
                ].map((session, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{session.type}</h4>
                          <Badge variant="secondary">{session.score}%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {session.date} • {session.duration}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {session.strengths.map((strength, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-500/10 text-green-500">
                          ✓ {strength}
                        </Badge>
                      ))}
                      {session.improvements.map((improvement, i) => (
                        <Badge key={i} variant="secondary" className="bg-amber-500/10 text-amber-500">
                          △ {improvement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          {/* Performance Overview */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Your interview skills progression</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(performanceData).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm text-muted-foreground">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Areas</CardTitle>
                <CardDescription>Focus points for better performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { area: "Communication Skills", tips: ["Improve clarity", "Use more examples", "Practice active listening"] },
                    { area: "Technical Knowledge", tips: ["Review system design", "Practice coding problems", "Study design patterns"] },
                    { area: "Body Language", tips: ["Maintain eye contact", "Work on posture", "Use appropriate gestures"] }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <h4 className="font-medium mb-2">{item.area}</h4>
                      <ul className="space-y-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interview History */}
          <Card>
            <CardHeader>
              <CardTitle>Interview Performance History</CardTitle>
              <CardDescription>Detailed view of your past interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    type: "Technical Interview",
                    company: "TechCorp",
                    date: "Last Week",
                    score: 92,
                    feedback: "Excellent problem-solving approach. Could improve time management.",
                    strengths: ["Algorithm Knowledge", "Code Quality", "Communication"],
                    improvements: ["Time Management"]
                  },
                  {
                    type: "HR Round",
                    company: "InnovateTech",
                    date: "2 Weeks Ago",
                    score: 88,
                    feedback: "Strong communication skills. Need more specific examples in responses.",
                    strengths: ["Communication", "Professional Attitude"],
                    improvements: ["Specific Examples", "Body Language"]
                  }
                ].map((interview, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{interview.type}</h4>
                          <Badge variant="secondary">{interview.score}%</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {interview.company} • {interview.date}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">Full Report</Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{interview.feedback}</p>
                    <div className="flex flex-wrap gap-2">
                      {interview.strengths.map((strength, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-500/10 text-green-500">
                          ✓ {strength}
                        </Badge>
                      ))}
                      {interview.improvements.map((improvement, i) => (
                        <Badge key={i} variant="secondary" className="bg-amber-500/10 text-amber-500">
                          △ {improvement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled interview practice sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockInterviews.map((interview, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{interview.company}</h4>
                            <Badge variant="secondary">{interview.difficulty}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{interview.role}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{interview.date}</span>
                            <span>•</span>
                            <span>{interview.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            {interview.topics.map((topic, i) => (
                              <Badge key={i} variant="secondary" className="bg-blue-500/10 text-blue-500">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm">Join Now</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Slots</CardTitle>
                  <CardDescription>Book your next practice session</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                    {[
                      { time: "10:00 AM", slots: 3, type: "Technical", expert: "AI Interviewer" },
                      { time: "2:00 PM", slots: 1, type: "HR Round", expert: "Sarah Johnson" },
                      { time: "4:30 PM", slots: 2, type: "System Design", expert: "AI Interviewer" },
                      { time: "6:00 PM", slots: 4, type: "Mock Interview", expert: "John Smith" }
                    ].map((slot, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{slot.time}</h4>
                            <p className="text-sm text-muted-foreground">{slot.type}</p>
                          </div>
                          <Badge variant="secondary">{slot.slots} slots</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">With {slot.expert}</p>
                        <Button size="sm" className="w-full" variant="outline">Book Slot</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Book</CardTitle>
                  <CardDescription>Schedule by interview type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "Technical Interview", icon: <Code className="w-4 h-4" /> },
                      { type: "HR Round", icon: <MessageSquare className="w-4 h-4" /> },
                      { type: "System Design", icon: <Brain className="w-4 h-4" /> },
                      { type: "Mock Interview", icon: <Users className="w-4 h-4" /> }
                    ].map((item, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start h-auto py-4 px-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {item.icon}
                          </div>
                          <span>{item.type}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Types</CardTitle>
                  <CardDescription>Interview preparation options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">One-on-One</h4>
                    <p className="text-sm text-muted-foreground">Personal coaching session with an expert</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">AI Practice</h4>
                    <p className="text-sm text-muted-foreground">Practice with our AI interviewer anytime</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Group Sessions</h4>
                    <p className="text-sm text-muted-foreground">Learn and practice with peers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Global ranking based on interview performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { rank: 1, name: "Alex Chen", score: 98, interviews: 45, badges: ["Technical Expert", "Communication Pro"] },
                      { rank: 2, name: "Sarah Johnson", score: 95, interviews: 38, badges: ["Problem Solver", "Quick Learner"] },
                      { rank: 3, name: "Michael Brown", score: 92, interviews: 42, badges: ["Code Master", "Team Player"] },
                      { rank: 4, name: "Emily Williams", score: 90, interviews: 35, badges: ["System Design Guru"] },
                      { rank: 5, name: "David Kim", score: 89, interviews: 40, badges: ["Algorithm Expert"] }
                    ].map((user, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-white",
                              {
                                "bg-yellow-500": index === 0,
                                "bg-gray-400": index === 1,
                                "bg-amber-600": index === 2,
                                "bg-primary/70": index > 2
                              }
                            )}>
                              {user.rank}
                            </div>
                            <div>
                              <h4 className="font-medium">{user.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {user.interviews} interviews completed
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <span className="text-2xl font-bold">{user.score}</span>
                              <span className="text-sm text-muted-foreground ml-1">pts</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {user.badges.map((badge, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/10">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                  <CardDescription>Badges and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { name: "Perfect Score", description: "Achieved 100% in a technical interview", progress: 80 },
                      { name: "Interview Master", description: "Complete 50 practice interviews", progress: 65 },
                      { name: "Speed Coder", description: "Solve coding challenge under time limit", progress: 90 },
                      { name: "Team Player", description: "Lead 10 group discussions", progress: 40 }
                    ].map((achievement, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">{achievement.name}</h4>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Challenge</CardTitle>
                  <CardDescription>Complete to earn bonus points</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="font-medium mb-2">System Design Marathon</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete 5 system design interviews this week
                    </p>
                    <Progress value={60} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">3/5 completed</p>
                  </div>
                  <Button className="w-full">
                    <Trophy className="w-4 h-4 mr-2" />
                    View All Challenges
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}