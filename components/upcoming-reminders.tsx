import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

interface Recordatorio {
  id_recordatorio: number
  titulo: string
  fecha_recordatorio: string
  enviado: boolean
}

const reminders: Recordatorio[] = [
  {
    id_recordatorio: 5,
    titulo: "Entrega proyecto de Bases de Datos",
    fecha_recordatorio: "2025-12-09T20:00:00",
    enviado: false,
  },
  {
    id_recordatorio: 6,
    titulo: "Estudiar para parcial de Redes",
    fecha_recordatorio: "2025-12-08T19:00:00",
    enviado: false,
  },
]

function formatDateTime(isoDate: string): string {
  const date = new Date(isoDate)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${day}/${month}/${year} ${hours}:${minutes}`
}

export function UpcomingReminders() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-pretty">Próximos recordatorios</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {reminders.map((reminder) => (
          <div
            key={reminder.id_recordatorio}
            className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Bell className="h-5 w-5 text-blue-600" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base text-foreground mb-1 text-pretty">{reminder.titulo}</h3>
              <p className="text-sm text-muted-foreground">{formatDateTime(reminder.fecha_recordatorio)}</p>
            </div>

            <Badge variant="secondary" className="flex-shrink-0 bg-amber-100 text-amber-700 hover:bg-amber-100">
              Pendiente
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
