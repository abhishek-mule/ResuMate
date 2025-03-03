"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, ArrowUpRight, Bookmark, Building2, DollarSign, LineChart, Target, TrendingUp, Users } from "lucide-react"

// Mock data - replace with real data in production
const marketData = {
  salary: {
    current: 95000,
    market: 105000,
    growth: 12
  },
  demand: {
    score: 85,
    trend: "increasing",
    companies: 230
  },
  skills: [
    { name: "React", demand: 95, growth: 15 },
    { name: "Node.js", demand: 88, growth: 12 },
    { name: "TypeScript", demand: 92, growth: 18 },
    { name: "AWS", demand: 90, growth: 20 }
  ],
  jobs: {
    total: 1250,
    new: 125,
    growth: 15
  }
}

export function CareerInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 px-4 sm:px-6 md:px-0"
    >
      {/* Market Overview */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <CardContent className="pt-6 p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Average Salary</p>
                <h3 className="text-2xl font-bold">${marketData.salary.market.toLocaleString()}</h3>
                <p className="text-sm text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  +{marketData.salary.growth}% YoY
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <CardContent className="pt-6 p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Job Openings</p>
                <h3 className="text-2xl font-bold">{marketData.jobs.total.toLocaleString()}</h3>
                <p className="text-sm text-blue-500 flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {marketData.jobs.new} new this week
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Bookmark className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <CardContent className="pt-6 p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Market Demand</p>
                <h3 className="text-2xl font-bold">{marketData.demand.score}/100</h3>
                <p className="text-sm text-purple-500 flex items-center mt-1">
                  <Building2 className="h-3 w-3 mr-1" />
                  {marketData.demand.companies} companies hiring
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <CardContent className="pt-6 p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Growth Rate</p>
                <h3 className="text-2xl font-bold">{marketData.jobs.growth}%</h3>
                <p className="text-sm text-orange-500 flex items-center mt-1">
                  <LineChart className="h-3 w-3 mr-1" />
                  Industry Average
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Insights */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="p-6">
            <CardTitle>Skill Demand Analysis</CardTitle>
            <CardDescription>Market demand for your key skills</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-5">
              {marketData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="ml-2">
                        +{skill.growth}%
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.demand}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.demand} className="h-2" />
                    <motion.div
                      className="absolute top-0 h-full"
                      style={{ left: `${skill.demand}%` }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <div className="h-3 w-3 -ml-1.5 -mt-0.5 rounded-full bg-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="p-6">
            <CardTitle>Market Opportunities</CardTitle>
            <CardDescription>Top companies and positions</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="companies" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="companies">Top Companies</TabsTrigger>
                <TabsTrigger value="positions">Top Positions</TabsTrigger>
              </TabsList>
              <TabsContent value="companies" className="space-y-4">
                {[
                  { name: "TechCorp Inc", openings: 12, trend: "up" },
                  { name: "InnovateAI", openings: 8, trend: "up" },
                  { name: "DevStack", openings: 6, trend: "stable" },
                  { name: "CloudTech", openings: 5, trend: "up" }
                ].map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 sm:p-4 rounded-lg border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{company.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {company.openings} open positions
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className={`h-4 w-4 ${company.trend === "up" ? "text-green-500" : "text-muted-foreground"}`} />
                  </motion.div>
                ))}
              </TabsContent>
              <TabsContent value="positions" className="space-y-4">
                {[
                  { title: "Senior Developer", demand: "High", salary: "120-150K" },
                  { title: "Tech Lead", demand: "Very High", salary: "140-180K" },
                  { title: "Solutions Architect", demand: "High", salary: "130-160K" },
                  { title: "DevOps Engineer", demand: "Medium", salary: "110-140K" }
                ].map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 sm:p-4 rounded-lg border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{position.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {position.demand} Demand • ${position.salary}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      View Jobs
                    </Badge>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}