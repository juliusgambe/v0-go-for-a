import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { UserCard } from "@/components/user-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Calendar, Users } from "lucide-react"
import { getPlaceholderAvatar } from "@/lib/avatar-utils"

// Mock data for demonstration
const leaderboardData = [
  {
    name: "Emma Thompson",
    subject: "Computer Science",
    university: "MIT",
    hours: 156,
  },
  {
    name: "Michael Chen",
    subject: "Physics",
    university: "Stanford",
    hours: 142,
  },
  {
    name: "Sophia Rodriguez",
    subject: "Biology",
    university: "Harvard",
    hours: 138,
  },
  {
    name: "David Kim",
    subject: "Mathematics",
    university: "Caltech",
    hours: 129,
  },
  {
    name: "Olivia Johnson",
    subject: "Chemistry",
    university: "UC Berkeley",
    hours: 124,
  },
  {
    name: "William Davis",
    subject: "Engineering",
    university: "Georgia Tech",
    hours: 118,
  },
  {
    name: "Ava Martinez",
    subject: "Psychology",
    university: "UCLA",
    hours: 112,
  },
  {
    name: "James Wilson",
    subject: "Economics",
    university: "Princeton",
    hours: 105,
  },
]

export default function LeaderboardPage() {
  return (
    <LayoutWithSidebar>
      <div className="container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Trophy className="h-7 w-7 text-amber-500" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground">See who's putting in the most study hours</p>
          </div>

          <Tabs defaultValue="all-time">
            <TabsList>
              <TabsTrigger value="all-time" className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-amber-500" />
                All Time
              </TabsTrigger>
              <TabsTrigger value="this-month" className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-blue-500" />
                This Month
              </TabsTrigger>
              <TabsTrigger value="this-week" className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-emerald-500" />
                This Week
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all-time" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Medal className="h-5 w-5 text-amber-500" />
                    Top Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {leaderboardData.map((user, index) => (
                      <UserCard
                        key={index}
                        name={user.name}
                        avatar={getPlaceholderAvatar(user.name)}
                        subject={user.subject}
                        university={user.university}
                        hours={user.hours}
                        theme="light"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="this-month" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Medal className="h-5 w-5 text-blue-500" />
                    Top Students This Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {leaderboardData.slice(2, 6).map((user, index) => (
                      <UserCard
                        key={index}
                        name={user.name}
                        avatar={getPlaceholderAvatar(user.name)}
                        subject={user.subject}
                        university={user.university}
                        hours={Math.floor(user.hours / 3)}
                        theme="light"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="this-week" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Medal className="h-5 w-5 text-emerald-500" />
                    Top Students This Week
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {leaderboardData.slice(4, 8).map((user, index) => (
                      <UserCard
                        key={index}
                        name={user.name}
                        avatar={getPlaceholderAvatar(user.name)}
                        subject={user.subject}
                        university={user.university}
                        hours={Math.floor(user.hours / 10)}
                        theme="light"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
