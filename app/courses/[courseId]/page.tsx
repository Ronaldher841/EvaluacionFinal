import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { CourseTasksFilters } from "@/components/course-tasks-filters"
import { CourseTasksTable } from "@/components/course-tasks-table"

// This would come from the route params in a real app
const courseName = "Bases de Datos I"

export default function CourseTasksPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6 lg:p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Tareas por curso</h1>
            <p className="text-muted-foreground">
              Curso: <span className="font-semibold text-foreground">{courseName}</span>
            </p>
          </div>

          <CourseTasksFilters />
          <CourseTasksTable courseName={courseName} />
        </main>
      </div>
    </div>
  )
}
