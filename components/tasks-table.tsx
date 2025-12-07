"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Edit, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

const tasks = [
  {
    id: 1,
    title: "Entrega proyecto de Bases de Datos",
    curso: "Bases de Datos I",
    estado: "pendiente",
    prioridad: "alta",
    fecha: "10/12/2025",
  },
  {
    id: 2,
    title: "Lectura capítulo 4 de Redes",
    curso: "Redes de Computadoras",
    estado: "pendiente",
    prioridad: "media",
    fecha: "09/12/2025",
  },
  {
    id: 3,
    title: "Resolver ejercicios de normalización",
    curso: "Bases de Datos I",
    estado: "en_progreso",
    prioridad: "alta",
    fecha: "04/12/2025",
  },
]

const estadoLabels = {
  pendiente: "Pendiente",
  en_progreso: "En progreso",
  completada: "Completada",
}

const estadoColors = {
  pendiente: "bg-amber-100 text-amber-700 border-amber-200",
  en_progreso: "bg-blue-100 text-blue-700 border-blue-200",
  completada: "bg-green-100 text-green-700 border-green-200",
}

const prioridadColors = {
  alta: "bg-red-100 text-red-700 border-red-200",
  media: "bg-yellow-100 text-yellow-700 border-yellow-200",
  baja: "bg-gray-100 text-gray-700 border-gray-200",
}

export function TasksTable() {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Tarea</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Curso</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Estado</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Prioridad</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Fecha</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-foreground">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-foreground text-pretty">{task.title}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-muted-foreground">{task.curso}</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
                      estadoColors[task.estado as keyof typeof estadoColors],
                    )}
                  >
                    {estadoLabels[task.estado as keyof typeof estadoLabels]}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border capitalize",
                      prioridadColors[task.prioridad as keyof typeof prioridadColors],
                    )}
                  >
                    {task.prioridad}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-muted-foreground">{task.fecha}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                      title="Editar tarea"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="sr-only">Editar tarea</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-green-100 hover:text-green-700"
                      title="Marcar como completada"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="sr-only">Marcar como completada</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                      title="Eliminar tarea"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="sr-only">Eliminar tarea</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
