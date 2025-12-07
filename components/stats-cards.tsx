import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, CheckCheck } from "lucide-react"

interface StatsCardsProps {
  data?: Array<{ estado: string; total: number }>
}

export function StatsCards({ data }: StatsCardsProps) {
  const statsConfig = {
    pendiente: {
      label: "Tareas pendientes",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    en_progreso: {
      label: "En progreso",
      icon: CheckCircle2,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    completada: {
      label: "Completadas",
      icon: CheckCheck,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  }

  const stats = data
    ? data.map((item) => ({
        label: statsConfig[item.estado as keyof typeof statsConfig].label,
        value: item.total.toString(),
        icon: statsConfig[item.estado as keyof typeof statsConfig].icon,
        color: statsConfig[item.estado as keyof typeof statsConfig].color,
        bgColor: statsConfig[item.estado as keyof typeof statsConfig].bgColor,
      }))
    : [
        { label: "Tareas pendientes", value: "8", icon: Clock, color: "text-orange-600", bgColor: "bg-orange-100" },
        { label: "En progreso", value: "3", icon: CheckCircle2, color: "text-blue-600", bgColor: "bg-blue-100" },
        { label: "Completadas", value: "12", icon: CheckCheck, color: "text-green-600", bgColor: "bg-green-100" },
      ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={cn(stat.bgColor, "p-3 rounded-lg")}>
                  <Icon className={cn(stat.color, "w-6 h-6")} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
