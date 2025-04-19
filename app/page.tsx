import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { Feed } from "@/components/feed/feed"
import { CreatePost } from "@/components/feed/create-post"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { getPlaceholderAvatar } from "@/lib/avatar-utils"

// Mock data for the feed
const feedItems = [
  {
    type: "session",
    id: "1",
    author: {
      name: "Emma Thompson",
      avatar: getPlaceholderAvatar("Emma Thompson"),
    },
    timestamp: "2 hours ago",
    duration: 45,
    participants: [
      {
        id: "1",
        name: "Emma Thompson",
        avatar: getPlaceholderAvatar("Emma Thompson"),
        subject: "Calculus",
        subjectKey: "math",
      },
      {
        id: "2",
        name: "Michael Chen",
        avatar: getPlaceholderAvatar("Michael Chen"),
        subject: "Physics",
        subjectKey: "physics",
      },
      {
        id: "3",
        name: "Sophia Rodriguez",
        avatar: getPlaceholderAvatar("Sophia Rodriguez"),
        subject: "Chemistry",
        subjectKey: "chemistry",
      },
    ],
    likes: 24,
    comments: 5,
    isLiked: true,
  },
  {
    type: "question",
    id: "2",
    author: {
      name: "David Kim",
      avatar: getPlaceholderAvatar("David Kim"),
    },
    timestamp: "3 hours ago",
    subject: "Computer Science",
    subjectKey: "cs",
    question:
      "Can someone explain the difference between merge sort and quick sort? I'm having trouble understanding the time complexity differences in worst-case scenarios.",
    likes: 8,
    comments: 12,
  },
  {
    type: "session",
    id: "3",
    author: {
      name: "Olivia Johnson",
      avatar: getPlaceholderAvatar("Olivia Johnson"),
    },
    timestamp: "Yesterday",
    duration: 60,
    participants: [
      {
        id: "4",
        name: "Olivia Johnson",
        avatar: getPlaceholderAvatar("Olivia Johnson"),
        subject: "Biology",
        subjectKey: "biology",
      },
      {
        id: "5",
        name: "William Davis",
        avatar: getPlaceholderAvatar("William Davis"),
        subject: "Biology",
        subjectKey: "biology",
      },
    ],
    likes: 15,
    comments: 3,
  },
  {
    type: "question",
    id: "4",
    author: {
      name: "Ava Martinez",
      avatar: getPlaceholderAvatar("Ava Martinez"),
    },
    timestamp: "Yesterday",
    subject: "Mathematics",
    subjectKey: "math",
    question:
      "I'm struggling with integration by parts. Could someone provide a step-by-step example of how to solve ∫x·ln(x)dx?",
    likes: 12,
    comments: 7,
  },
]

export default function Home() {
  return (
    <LayoutWithSidebar>
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <CreatePost user={{ name: "Alex Johnson", avatar: getPlaceholderAvatar("Alex Johnson") }} />
            <Feed items={feedItems} />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Study Time</p>
                    <p className="font-medium">12.5 hours this week</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                    <p className="font-medium">5 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Study Buddies</p>
                    <p className="font-medium">8 active friends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trending Subjects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Computer Science</span>
                  <span className="text-sm text-muted-foreground">245 sessions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Mathematics</span>
                  <span className="text-sm text-muted-foreground">189 sessions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Physics</span>
                  <span className="text-sm text-muted-foreground">156 sessions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Biology</span>
                  <span className="text-sm text-muted-foreground">132 sessions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Chemistry</span>
                  <span className="text-sm text-muted-foreground">98 sessions</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Physics Study Group</span>
                    <span className="text-sm text-muted-foreground">Today, 4:00 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">3 participants</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Calculus Review</span>
                    <span className="text-sm text-muted-foreground">Tomorrow, 2:30 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">5 participants</p>
                </div>
                <Link href="/setup">
                  <Button variant="outline" className="w-full mt-2">
                    Create New Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
