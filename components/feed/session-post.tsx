import { UserAvatar } from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Heart, MessageSquare, Share2, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SessionParticipant {
  id: string
  name: string
  avatar?: string
  subject: string
  subjectKey?: string
}

export interface SessionPostProps {
  id: string
  author: {
    name: string
    avatar?: string
  }
  timestamp: string
  duration: number
  participants: SessionParticipant[]
  likes: number
  comments: number
  isLiked?: boolean
}

// Color mapping for different subjects
const subjectColors: Record<string, string> = {
  math: "bg-blue-100 text-blue-800 border-blue-200",
  physics: "bg-purple-100 text-purple-800 border-purple-200",
  cs: "bg-emerald-100 text-emerald-800 border-emerald-200",
  biology: "bg-green-100 text-green-800 border-green-200",
  chemistry: "bg-amber-100 text-amber-800 border-amber-200",
  literature: "bg-pink-100 text-pink-800 border-pink-200",
  history: "bg-orange-100 text-orange-800 border-orange-200",
  other: "bg-gray-100 text-gray-800 border-gray-200",
}

// Helper function to get subject key from name
const getSubjectKey = (subject: string): string => {
  const lowerSubject = subject.toLowerCase()
  if (lowerSubject.includes("math") || lowerSubject.includes("calc")) return "math"
  if (lowerSubject.includes("physics")) return "physics"
  if (lowerSubject.includes("computer") || lowerSubject.includes("cs")) return "cs"
  if (lowerSubject.includes("bio")) return "biology"
  if (lowerSubject.includes("chem")) return "chemistry"
  if (lowerSubject.includes("lit") || lowerSubject.includes("english")) return "literature"
  if (lowerSubject.includes("hist")) return "history"
  return "other"
}

export function SessionPost({
  id,
  author,
  timestamp,
  duration,
  participants,
  likes,
  comments,
  isLiked = false,
}: SessionPostProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <UserAvatar name={author.name} src={author.avatar} />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{author.name}</p>
                <p className="text-xs text-muted-foreground">
                  Completed a {duration} min study session • {timestamp}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-emerald-500" />
            <span className="text-sm">{duration} minutes</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Participants</span>
            </div>
            <div className="grid gap-2">
              {participants.map((participant) => {
                const subjectKey = participant.subjectKey || getSubjectKey(participant.subject)
                return (
                  <div key={participant.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserAvatar name={participant.name} src={participant.avatar} size="sm" />
                      <span className="text-sm">{participant.name}</span>
                    </div>
                    <div
                      className={cn(
                        "text-xs py-1 px-2 rounded-full border",
                        subjectColors[subjectKey] || subjectColors.other,
                      )}
                    >
                      {participant.subject}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="pt-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="gap-1 px-2">
              <Heart className={`h-4 w-4 ${isLiked ? "fill-rose-500 text-rose-500" : "text-zinc-500"}`} />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-1 px-2">
              <MessageSquare className="h-4 w-4 text-blue-500" />
              <span>{comments}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 px-2">
            <Share2 className="h-4 w-4 text-purple-500" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
