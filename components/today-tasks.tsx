import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TaskCard } from "@/components/task-card"

const todayTasks = [
  {
    id_tarea: 15,
    titulo: "Resolver ejercicios de normalización",
    fecha_entrega: "2025-12-04T18:00:00",
    prioridad: "Alta" as const,
    nombre_curso: "Bases de Datos I",
  },
  {
    id_tarea: 16,
    titulo: "Resumen de artículo de redes",
    fecha_entrega: "2025-12-04T21:00:00",
    prioridad: "Media" as const,
    nombre_curso: "Redes de Computadoras",
  },
]

function extractTime(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", hour12: false })
}

export function TodayTasks() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-pretty">Tareas para hoy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {todayTasks.map((task) => (
          <TaskCard
            key={task.id_tarea}
            task={{
              id: task.id_tarea.toString(),
              title: task.titulo,
              course: task.nombre_curso,
              dueDate: extractTime(task.fecha_entrega),
              priority: task.prioridad,
            }}
            showTime
          />
        ))}
      </CardContent>
    </Card>
  )
}
