"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Loader2 } from "lucide-react"

export function AIResumeForm() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    objective: "",
    workHistory: "",
    education: "",
    skills: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    
    try {
      // TODO: Implement AI generation logic here
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
      
      setIsGenerating(false)
    } catch (error) {
      console.error("Error generating resume:", error)
      setIsGenerating(false)
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Country"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="objective">Professional Objective</Label>
          <Textarea
            id="objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            placeholder="Brief overview of your career goals and aspirations..."
            className="h-24"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="workHistory">Work History</Label>
          <Textarea
            id="workHistory"
            name="workHistory"
            value={formData.workHistory}
            onChange={handleChange}
            placeholder="List your work experience with company names, dates, and key responsibilities..."
            className="h-32"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="education">Education</Label>
          <Textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="List your educational background, degrees, and certifications..."
            className="h-24"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills</Label>
          <Textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="List your technical, soft, and industry-specific skills..."
            className="h-24"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Resume...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate AI Resume
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}