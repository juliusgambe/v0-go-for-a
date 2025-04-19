import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubjectCard } from "@/components/subject-card"
import { BarChart, Clock, Edit, Settings, Trophy, BookOpen, Award, Flame } from "lucide-react"
import { getPlaceholderAvatar } from "@/lib/avatar-utils"
import { UserAvatar } from "@/components/ui/user-avatar"

// Mock data for demonstration
const userData = {
  name: "Alex Johnson",
  avatar: getPlaceholderAvatar("Alex Johnson"),
  university: "Stanford University",
  bio: "Computer Science student passionate about AI and machine learning. I love to learn new things and challenge myself.",
  totalHours: 342,
  streak: 15,
  subjects: [
    { name: "Machine Learning", hoursStudied: 120, goalHours: 200, streak: 15 },
    { name: "Algorithms", hoursStudied: 85, goalHours: 100, streak: 10 },
    { name: "Data Structures", hoursStudied: 65, goalHours: 80, streak: 8 },
    { name: "Web Development", hoursStudied: 72, goalHours: 100, streak: 5 },
  ],
  highlights: [
    { title: "Longest Study Session", value: "3h 45m", icon: Clock, color: "text-emerald-500" },
    { title: "Current Streak", value: "15 days", icon: Flame, color: "text-amber-500" },
    { title: "Most Productive Day", value: "Tuesday", icon: BarChart, color: "text-blue-500" },
  ],
}

export default function ProfilePage() {
  return (
    <LayoutWithSidebar>
      <div className="container py-8">
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <UserAvatar name={userData.name} src={userData.avatar} size="xl" />

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-2xl font-bold">{userData.name}</h1>
                      <p className="text-muted-foreground">{userData.university}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-4 w-4 text-blue-500" />
                        <span className="hidden sm:inline">Edit Profile</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4 text-zinc-500" />
                      </Button>
                    </div>
                  </div>

                  <p>{userData.bio}</p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">{userData.totalHours} hours studied</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-amber-500" />
                      <span className="text-sm">{userData.streak} day streak</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {userData.highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{highlight.title}</p>
                      <p className="text-xl font-bold">{highlight.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="subjects">
            <TabsList>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="subjects" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    My Subjects
                  </CardTitle>
                  <CardDescription>Track your progress across different subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {userData.subjects.map((subject, index) => (
                      <SubjectCard
                        key={index}
                        name={subject.name}
                        hoursStudied={subject.hoursStudied}
                        goalHours={subject.goalHours}
                        streak={subject.streak}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="statistics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-purple-500" />
                    Study Statistics
                  </CardTitle>
                  <CardDescription>Your study patterns and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                    <p className="text-muted-foreground">Study statistics visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="achievements" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    Achievements
                  </CardTitle>
                  <CardDescription>Badges and milestones you've reached</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className="flex flex-col items-center gap-2 p-4 border rounded-md">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Trophy className="h-8 w-8 text-amber-500" />
                        </div>
                        <h3 className="font-medium text-center">Achievement {index + 1}</h3>
                        <p className="text-xs text-muted-foreground text-center">Description of the achievement</p>
                      </div>
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
