import { LayoutWithSidebar } from "@/components/layout-with-sidebar"
import { TimerProgress } from "@/components/timer-progress"
import { UserCard } from "@/components/user-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPlaceholderAvatar } from "@/lib/avatar-utils"

// Mock data for demonstration
const currentSession = {
  subject: "Contractionary Fiscal Policy",
  course: "H2 Economics",
  date: "Not 06/18",
  duration: 45, // minutes
  participants: [
    {
      id: "1",
      name: "John Appleseed",
      avatar: getPlaceholderAvatar("John Appleseed"),
      subject: "Organic Chemistry",
    },
    {
      id: "2",
      name: "Big Bad Bryan",
      avatar: getPlaceholderAvatar("Big Bad Bryan"),
      subject: "Calculus",
    },
    {
      id: "3",
      name: "Finn Lee",
      avatar: getPlaceholderAvatar("Finn Lee"),
      subject: "Contractionary Fiscal Policy",
    },
  ],
}

export default function TimerPage() {
  return (
    <LayoutWithSidebar>
      <div className="flex flex-col h-screen bg-white">
        {/* Top message */}
        <div className="py-2 text-center text-sm text-zinc-600 border-b border-zinc-200">
          Studying helps to increase your success in life
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Timer section */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-3xl w-full">
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                  {currentSession.course}
                </Badge>
                <Badge variant="outline" className="bg-zinc-100 text-zinc-600 border-zinc-300">
                  {currentSession.date}
                </Badge>
              </div>

              <div className="mb-2">
                <h1 className="text-xl font-medium text-zinc-900">{currentSession.subject}</h1>
              </div>

              <TimerProgress
                duration={currentSession.duration}
                subject={currentSession.subject}
                variant="large"
                theme="light"
              />
            </div>
          </div>

          {/* Bottom participants bar - now positioned at the bottom */}
          <div className="border-t border-zinc-200 bg-zinc-50 backdrop-blur-sm p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                {currentSession.participants.map((participant) => (
                  <div key={participant.id} className="flex items-center gap-3">
                    <UserCard
                      name={participant.name}
                      avatar={participant.avatar}
                      subject={participant.subject}
                      isCompact
                      theme="light"
                    />
                  </div>
                ))}
              </div>

              <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900">
                End
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
