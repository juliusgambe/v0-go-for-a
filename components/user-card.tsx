import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserAvatar } from "@/components/ui/user-avatar"
import { cn } from "@/lib/utils"

interface UserCardProps {
  name: string
  avatar?: string
  subject: string
  university?: string
  hours?: number
  isCompact?: boolean
  className?: string
  theme?: "dark" | "light"
}

// Map subjects to colors for light theme
const subjectColorsLight: Record<string, string> = {
  Physics: "bg-blue-50 text-blue-600 border-blue-200",
  "Computer Science": "bg-emerald-50 text-emerald-600 border-emerald-200",
  Chemistry: "bg-amber-50 text-amber-600 border-amber-200",
  Biology: "bg-green-50 text-green-600 border-green-200",
  Mathematics: "bg-violet-50 text-violet-600 border-violet-200",
  Calculus: "bg-violet-50 text-violet-600 border-violet-200",
  "Organic Chemistry": "bg-amber-50 text-amber-600 border-amber-200",
  "Contractionary Fiscal Policy": "bg-blue-50 text-blue-600 border-blue-200",
  Economics: "bg-blue-50 text-blue-600 border-blue-200",
  Engineering: "bg-purple-50 text-purple-600 border-purple-200",
  Psychology: "bg-pink-50 text-pink-600 border-pink-200",
}

// Map subjects to colors for dark theme
const subjectColorsDark: Record<string, string> = {
  Physics: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Computer Science": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Chemistry: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Biology: "bg-green-500/10 text-green-400 border-green-500/20",
  Mathematics: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Calculus: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Organic Chemistry": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Contractionary Fiscal Policy": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Economics: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Engineering: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Psychology: "bg-pink-500/10 text-pink-400 border-pink-500/20",
}

export function UserCard({
  name,
  avatar,
  subject,
  university,
  hours,
  isCompact = false,
  className,
  theme = "dark",
}: UserCardProps) {
  const subjectColors = theme === "light" ? subjectColorsLight : subjectColorsDark
  const subjectColor =
    subjectColors[subject] ||
    (theme === "light"
      ? "bg-zinc-100 text-zinc-600 border-zinc-300"
      : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20")

  if (isCompact) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <UserAvatar name={name} src={avatar} size="sm" />
        <div className="flex flex-col">
          <span className={cn("text-sm font-medium", theme === "light" ? "text-zinc-900" : "text-white")}>{name}</span>
          <Badge variant="outline" className={cn("text-xs", subjectColor)}>
            {subject}
          </Badge>
        </div>
      </div>
    )
  }

  return (
    <Card className={cn("overflow-hidden", theme === "light" ? "border-zinc-200" : "border-zinc-800", className)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <UserAvatar name={name} src={avatar} size="lg" />
          <div className="flex flex-col">
            <span className={cn("font-medium", theme === "light" ? "text-zinc-900" : "text-white")}>{name}</span>
            <span className={cn("text-sm", theme === "light" ? "text-zinc-600" : "text-muted-foreground")}>
              {university}
            </span>
            {hours !== undefined && (
              <span className={cn("text-sm", theme === "light" ? "text-zinc-700" : "text-zinc-300")}>
                {hours} hours studied
              </span>
            )}
            <Badge variant="outline" className={cn("mt-1 w-fit", subjectColor)}>
              {subject}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
