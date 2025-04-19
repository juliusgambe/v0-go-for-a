"use client"

import { useState } from "react"
import { UserAvatar } from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HelpCircle, Clock, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface CreatePostProps {
  user: {
    name: string
    avatar?: string
  }
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

export function CreatePost({ user }: CreatePostProps) {
  const [postType, setPostType] = useState<"question" | "session" | null>(null)
  const [showOptions, setShowOptions] = useState(false)
  const [subject, setSubject] = useState<string | null>(null)
  const [duration, setDuration] = useState<string | null>(null)

  const handlePostTypeSelect = (type: "question" | "session") => {
    setPostType(type)
    setShowOptions(true)
  }

  const handleSubjectChange = (value: string) => {
    setSubject(value)
  }

  const handleDurationChange = (value: string) => {
    setDuration(value)
  }

  const resetForm = () => {
    setPostType(null)
    setShowOptions(false)
    setSubject(null)
    setDuration(null)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <UserAvatar name={user.name} src={user.avatar} size="sm" />

          <div className="flex-1">
            <Textarea
              placeholder={
                postType === "question"
                  ? "Ask a question..."
                  : postType === "session"
                    ? "Share your study session..."
                    : "What's on your mind?"
              }
              className="min-h-[60px] border-none bg-muted/40 focus-visible:ring-0 resize-none"
              onClick={() => !postType && setShowOptions(true)}
            />

            {showOptions && !postType && (
              <div className="mt-3 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 gap-1.5 rounded-full bg-muted/50 hover:bg-muted"
                  onClick={() => handlePostTypeSelect("question")}
                >
                  <HelpCircle className="h-3.5 w-3.5 text-blue-500" />
                  Ask a question
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 gap-1.5 rounded-full bg-muted/50 hover:bg-muted"
                  onClick={() => handlePostTypeSelect("session")}
                >
                  <Clock className="h-3.5 w-3.5 text-emerald-500" />
                  Share a session
                </Button>
              </div>
            )}

            {postType && (
              <div className="mt-3 space-y-3">
                <div className="flex flex-wrap gap-2 items-center">
                  <div
                    className={cn(
                      "text-xs py-1 px-3 rounded-full border flex items-center gap-1.5",
                      postType === "question"
                        ? "bg-blue-50 text-blue-700 border-blue-100"
                        : "bg-green-50 text-green-700 border-green-100",
                    )}
                  >
                    {postType === "question" ? (
                      <>
                        <HelpCircle className="h-3 w-3 text-blue-500" />
                        Question
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 text-emerald-500" />
                        Study Session
                      </>
                    )}
                  </div>

                  {subject && (
                    <div
                      className={cn(
                        "text-xs py-1 px-3 rounded-full border flex items-center gap-1.5",
                        subjectColors[subject] || subjectColors.other,
                      )}
                    >
                      {subject === "math"
                        ? "Mathematics"
                        : subject === "cs"
                          ? "Computer Science"
                          : subject === "physics"
                            ? "Physics"
                            : subject === "biology"
                              ? "Biology"
                              : subject === "chemistry"
                                ? "Chemistry"
                                : subject === "literature"
                                  ? "Literature"
                                  : subject === "history"
                                    ? "History"
                                    : "Other"}
                    </div>
                  )}

                  {duration && postType === "session" && (
                    <div className="text-xs py-1 px-3 rounded-full border bg-amber-50 text-amber-700 border-amber-100 flex items-center gap-1.5">
                      {duration} minutes
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 rounded-full"
                    onClick={() => setSubject(null)}
                  >
                    <Plus className="h-3.5 w-3.5 text-purple-500" />
                    <span className="sr-only">Add details</span>
                  </Button>
                </div>

                {!subject && (
                  <div className="flex gap-2 items-center">
                    <Select onValueChange={handleSubjectChange}>
                      <SelectTrigger className="h-8 text-xs w-[140px] border-dashed">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="literature">Literature</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    {postType === "session" && !duration && (
                      <Select onValueChange={handleDurationChange}>
                        <SelectTrigger className="h-8 text-xs w-[140px] border-dashed">
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25">25 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                          <SelectItem value="90">90 minutes</SelectItem>
                          <SelectItem value="120">120 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                )}

                {postType === "session" && (
                  <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-full">
                    <Plus className="h-3.5 w-3.5 text-purple-500" />
                    Tag participants
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>

      {postType && (
        <CardFooter className="flex justify-between p-3 pt-0">
          <Button variant="ghost" size="sm" onClick={resetForm}>
            Cancel
          </Button>
          <Button
            size="sm"
            className={
              postType === "question" ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"
            }
          >
            {postType === "question" ? "Post Question" : "Share Session"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
