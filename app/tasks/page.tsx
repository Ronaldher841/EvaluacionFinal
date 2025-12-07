import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { TasksFilters } from "@/components/tasks-filters"
import { TasksTable } from "@/components/tasks-table"

export default function TasksPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6 lg:p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Mis Tareas</h1>
            <p className="text-muted-foreground">Gestiona y organiza todas tus tareas académicas</p>
          </div>

          <TasksFilters />
          <TasksTable />
        </main>
      </div>
    </div>
  )
}
