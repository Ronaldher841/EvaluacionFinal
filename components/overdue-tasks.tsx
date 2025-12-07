import { AlertTriangle, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

interface OverdueTask {
  id_tarea: number
  titulo: string
  fecha_entrega: string
  prioridad: "Alta" | "Media" | "Baja"
  nombre_curso: string
}

interface OverdueTasksProps {
  tasks?: OverdueTask[]
}

const sampleTasks: OverdueTask[] = [
  {
    id_tarea: 30,
    titulo: "Entrega reporte de investigación",
    fecha_entrega: "2025-12-01T23:59:00",
    prioridad: "Alta",
    nombre_curso: "Metodología de la Investigación",
  },
  {
    id_tarea: 31,
    titulo: "Subir práctica de laboratorio 2",
    fecha_entrega: "2025-12-02T17:00:00",
    prioridad: "Media",
    nombre_curso: "Redes de Computadoras",
  },
]

export function OverdueTasks({ tasks = sampleTasks }: OverdueTasksProps) {
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    return `${day}/${month}/${year} ${hours}:${minutes}`
  }

  if (tasks.length === 0) {
    return null
  }

  return (
    <Card className="bg-card border-red-200">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-100 p-2 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Tareas atrasadas</h2>
          <span className="ml-auto bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
            {tasks.length}
          </span>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id_tarea}
              className="bg-red-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{task.titulo}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{task.nombre_curso}</p>
                  <div className="flex items-center gap-2 text-sm text-red-700">
                    <Clock className="h-4 w-4" />
                    <span>Fecha límite: {formatDate(task.fecha_entrega)}</span>
                  </div>
                </div>
                <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap">
                  Atrasada
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
