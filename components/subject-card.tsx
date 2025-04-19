import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubjectCardProps {
  name: string
  hoursStudied: number
  goalHours: number
  streak: number
}

export function SubjectCard({ name, hoursStudied, goalHours, streak }: SubjectCardProps) {
  const progress = Math.min((hoursStudied / goalHours) * 100, 100)

  // Get progress color based on completion percentage
  const getProgressColor = () => {
    if (progress > 75) return "bg-emerald-500"
    if (progress > 50) return "bg-blue-500"
    if (progress > 25) return "bg-amber-500"
    return "bg-rose-500"
  }

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-blue-500" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">{hoursStudied} hours</span>
          <span className="text-muted-foreground">Goal: {goalHours} hours</span>
        </div>
        <Progress value={progress} className="h-2" indicatorClassName={getProgressColor()} />
        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Flame className={cn("h-3.5 w-3.5", streak > 7 ? "text-rose-500" : "text-amber-500")} />
          {streak} day streak
        </div>
      </CardContent>
    </Card>
  )
}
