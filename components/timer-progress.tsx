"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimerProgressProps {
  duration: number // in minutes
  subject: string
  className?: string
  variant?: "default" | "large"
  theme?: "dark" | "light"
  onComplete?: () => void
}

export function TimerProgress({
  duration,
  subject,
  className,
  variant = "default",
  theme = "dark",
  onComplete,
}: TimerProgressProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60) // convert to seconds
  const [isActive, setIsActive] = useState(false)
  const [progress, setProgress] = useState(100)

  const totalSeconds = duration * 60

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1
          setProgress((newTime / totalSeconds) * 100)
          return newTime
        })
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
      onComplete?.()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, totalSeconds, onComplete])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleTimer = () => setIsActive(!isActive)

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(duration * 60)
    setProgress(100)
  }

  // Get progress color based on remaining time
  const getProgressColor = () => {
    if (progress > 66) return "bg-blue-500"
    if (progress > 33) return "bg-violet-500"
    return "bg-rose-500"
  }

  if (variant === "large") {
    return (
      <div className={cn("w-full space-y-6", className)}>
        <div className="text-center space-y-2">
          <h2
            className={cn(
              "text-7xl font-bold tracking-tight tabular-nums",
              theme === "light" ? "text-zinc-900" : "text-white",
            )}
          >
            {formatTime(timeLeft)}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <p className={cn("text-xl", theme === "light" ? "text-zinc-600" : "text-zinc-400")}>{subject}</p>
          </div>
        </div>
        <Progress
          value={progress}
          className={cn("h-2 w-full", theme === "light" ? "bg-zinc-200" : "bg-zinc-800")}
          indicatorClassName={getProgressColor()}
        />
        <div className="flex justify-center gap-4">
          <Button
            onClick={toggleTimer}
            size="lg"
            className={cn(
              "transition-colors",
              isActive ? "bg-violet-600 hover:bg-violet-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white",
            )}
          >
            {isActive ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button
            onClick={resetTimer}
            variant="outline"
            size="lg"
            className={cn(
              theme === "light"
                ? "border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                : "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white",
            )}
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("w-full max-w-md mx-auto space-y-4", className)}>
      <div className="text-center space-y-2">
        <h2 className={cn("text-3xl font-bold tracking-tight", theme === "light" ? "text-zinc-900" : "text-white")}>
          {formatTime(timeLeft)}
        </h2>
        <p
          className={cn(
            "flex items-center justify-center gap-1.5",
            theme === "light" ? "text-zinc-600" : "text-muted-foreground",
          )}
        >
          <BookOpen className="h-4 w-4 text-blue-600" />
          Studying: {subject}
        </p>
      </div>
      <Progress
        value={progress}
        className={cn("h-3", theme === "light" ? "bg-zinc-200" : "bg-zinc-800")}
        indicatorClassName={getProgressColor()}
      />
      <div className="flex justify-center gap-2">
        <Button
          onClick={toggleTimer}
          variant="outline"
          size="icon"
          className={cn(
            isActive ? "text-violet-600 border-violet-300" : "text-blue-600 border-blue-300",
            theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800",
          )}
        >
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          onClick={resetTimer}
          variant="outline"
          size="icon"
          className={cn("text-rose-600 border-rose-300", theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800")}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
