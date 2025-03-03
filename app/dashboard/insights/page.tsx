import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CareerInsights } from "@/components/dashboard/career-insights"

export default function InsightsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Career Insights"
        text="Data-driven insights to help guide your career decisions"
      />
      <CareerInsights />
    </DashboardShell>
  )
}