import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TaskCard } from "@/components/task-card"

const upcomingTasks = [
  {
    id: "1",
    title: "Entrega proyecto de Bases de Datos",
    course: "Bases de Datos I",
    dueDate: "10/12/2025 23:59",
    priority: "Alta" as const,
  },
  {
    id: "2",
    title: "Lectura capítulo 4 de Redes",
    course: "Redes de Computadoras",
    dueDate: "09/12/2025 20:00",
    priority: "Media" as const,
  },
]

export function UpcomingTasks() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-pretty">Próximas tareas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </CardContent>
    </Card>
  )
}
