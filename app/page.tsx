import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { UpcomingTasks } from "@/components/upcoming-tasks"
import { TodayTasks } from "@/components/today-tasks"
import { UpcomingReminders } from "@/components/upcoming-reminders"
import { OverdueTasks } from "@/components/overdue-tasks"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6 lg:p-8 space-y-8">
          <StatsCards />
          <OverdueTasks />
          <UpcomingTasks />
          <TodayTasks />
          <UpcomingReminders />
        </main>
      </div>
    </div>
  )
}
