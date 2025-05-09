import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"

interface LayoutWithSidebarProps {
  children: ReactNode
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 pl-24 lg:pl-18 flex flex-col">{children}</main>
    </div>
  )
}
