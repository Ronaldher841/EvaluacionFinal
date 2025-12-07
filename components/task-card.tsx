import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

type Priority = "Alta" | "Media" | "Baja"

interface TaskCardProps {
  task: {
    id: string
    title: string
    course: string
    dueDate: string
    priority: Priority
  }
  showTime?: boolean
}

const priorityConfig: Record<Priority, { color: string; bgColor: string }> = {
  Alta: { color: "text-destructive", bgColor: "bg-destructive/10 border-destructive/20" },
  Media: { color: "text-chart-2", bgColor: "bg-chart-2/10 border-chart-2/20" },
  Baja: { color: "text-muted-foreground", bgColor: "bg-muted border-border" },
}

export function TaskCard({ task, showTime = false }: TaskCardProps) {
  const priorityStyle = priorityConfig[task.priority]

  return (
    <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold text-foreground text-pretty leading-snug">{task.title}</h3>
            <Badge
              variant="secondary"
              className={cn("shrink-0 font-medium border", priorityStyle.bgColor, priorityStyle.color)}
            >
              {task.priority}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{task.course}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{showTime ? `Hoy ${task.dueDate}` : task.dueDate}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
