"use client"

import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export function TasksFilters() {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filtros:</span>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="estado-filter" className="text-sm text-muted-foreground whitespace-nowrap">
            Estado:
          </label>
          <Select defaultValue="todos">
            <SelectTrigger id="estado-filter" className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="pendiente">Pendiente</SelectItem>
              <SelectItem value="en_progreso">En progreso</SelectItem>
              <SelectItem value="completada">Completada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="prioridad-filter" className="text-sm text-muted-foreground whitespace-nowrap">
            Prioridad:
          </label>
          <Select defaultValue="todas">
            <SelectTrigger id="prioridad-filter" className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="alta">Alta</SelectItem>
              <SelectItem value="media">Media</SelectItem>
              <SelectItem value="baja">Baja</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="curso-filter" className="text-sm text-muted-foreground whitespace-nowrap">
            Curso:
          </label>
          <Select defaultValue="todos">
            <SelectTrigger id="curso-filter" className="w-[220px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="bases-datos">Bases de Datos I</SelectItem>
              <SelectItem value="redes">Redes de Computadoras</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  )
}
