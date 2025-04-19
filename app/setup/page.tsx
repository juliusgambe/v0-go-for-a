import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { UserCard } from "@/components/user-card"
import { Separator } from "@/components/ui/separator"
import { Plus, X, Clock, Target, Users, BookOpen, Search } from "lucide-react"
import { getPlaceholderAvatar } from "@/lib/avatar-utils"

// Mock data for demonstration
const friends = [
  { name: "Alex Johnson", avatar: getPlaceholderAvatar("Alex Johnson"), subject: "Physics" },
  { name: "Maria Garcia", avatar: getPlaceholderAvatar("Maria Garcia"), subject: "Computer Science" },
  { name: "James Wilson", avatar: getPlaceholderAvatar("James Wilson"), subject: "Chemistry" },
  { name: "Sarah Lee", avatar: getPlaceholderAvatar("Sarah Lee"), subject: "Biology" },
]

export default function SetupPage() {
  return (
    <LayoutWithSidebar>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Clock className="h-7 w-7 text-emerald-500" />
              Set Up Study Session
            </h1>
            <p className="text-muted-foreground">Configure your pomodoro timer and invite friends</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-500" />
                Session Details
              </CardTitle>
              <CardDescription>Configure your pomodoro timer settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="focus-time" className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-emerald-500" />
                    Focus Time (minutes)
                  </Label>
                  <Select defaultValue="25">
                    <SelectTrigger id="focus-time">
                      <SelectValue placeholder="Select focus time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="25">25 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="break-time" className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-amber-500" />
                    Break Time (minutes)
                  </Label>
                  <Select defaultValue="5">
                    <SelectTrigger id="break-time">
                      <SelectValue placeholder="Select break time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="20">20 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  Subject
                </Label>
                <Input id="subject" placeholder="What are you studying?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal" className="flex items-center gap-1.5">
                  <Target className="h-4 w-4 text-purple-500" />
                  Session Goal (optional)
                </Label>
                <Textarea id="goal" placeholder="What do you want to accomplish?" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Invite Friends
              </CardTitle>
              <CardDescription>Study together with your friends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search friends..." className="pl-9" />
                  </div>
                  <Button variant="outline" size="icon" className="text-emerald-500">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-blue-500" />
                    Selected Friends
                  </h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between rounded-md border p-2">
                      <UserCard
                        name="Alex Johnson"
                        avatar={getPlaceholderAvatar("Alex Johnson")}
                        subject="Physics"
                        isCompact
                      />
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-2">
                      <UserCard
                        name="Maria Garcia"
                        avatar={getPlaceholderAvatar("Maria Garcia")}
                        subject="Computer Science"
                        isCompact
                      />
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-rose-500">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-emerald-500" />
                    Suggested Friends
                  </h3>
                  <div className="grid gap-2">
                    {friends.slice(2).map((friend, index) => (
                      <div key={index} className="flex items-center justify-between rounded-md border p-2">
                        <UserCard name={friend.name} avatar={friend.avatar} subject={friend.subject} isCompact />
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-500">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Start Session</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
