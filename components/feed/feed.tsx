import { SessionPost, type SessionPostProps } from "./session-post"
import { QuestionPost, type QuestionPostProps } from "./question-post"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type FeedItem = ({ type: "session" } & SessionPostProps) | ({ type: "question" } & QuestionPostProps)

interface FeedProps {
  items: FeedItem[]
}

export function Feed({ items }: FeedProps) {
  const sessionPosts = items.filter((item) => item.type === "session") as ({ type: "session" } & SessionPostProps)[]
  const questionPosts = items.filter((item) => item.type === "question") as ({ type: "question" } & QuestionPostProps)[]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sessions">Study Sessions</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6 space-y-6">
          {items.map((item) =>
            item.type === "session" ? (
              <SessionPost key={item.id} {...item} />
            ) : (
              <QuestionPost key={item.id} {...item} />
            ),
          )}
        </TabsContent>
        <TabsContent value="sessions" className="mt-6 space-y-6">
          {sessionPosts.map((item) => (
            <SessionPost key={item.id} {...item} />
          ))}
        </TabsContent>
        <TabsContent value="questions" className="mt-6 space-y-6">
          {questionPosts.map((item) => (
            <QuestionPost key={item.id} {...item} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
