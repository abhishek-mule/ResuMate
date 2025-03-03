"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { InterviewCoach } from "@/components/dashboard/interview-coach"

export default function InterviewCoachPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Interview Coach"
        text="AI-powered interview preparation system to enhance your interview skills"
      />
      <InterviewCoach />
    </DashboardShell>
  )
}