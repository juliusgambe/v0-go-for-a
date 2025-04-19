"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle, Clock, Trophy, Home, User, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { href: "/", label: "Home", icon: Home, color: "text-blue-500" },
    { href: "/timer", label: "Timer", icon: Clock, color: "text-emerald-500" },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy, color: "text-amber-500" },
    { href: "/profile", label: "Profile", icon: User, color: "text-purple-500" },
  ]

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-zinc-900/90 backdrop-blur-md transition-all duration-300 ease-in-out text-white",
          isOpen ? "w-64" : "w-16",
        )}
      >
        <div className="flex h-14 items-center border-b border-zinc-700/50 px-4">
          {isOpen ? (
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Clock className="h-5 w-5 text-emerald-400" />
              <span>Go For A</span>
            </Link>
          ) : (
            <div className="mx-auto">{/* Clock removed when sidebar is collapsed */}</div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto text-zinc-400 hover:text-white hover:bg-zinc-800/50"
            onClick={toggleSidebar}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 space-y-2 p-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size={isOpen ? "default" : "icon"}
                className={cn(
                  "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800/50",
                  pathname === item.href && "bg-zinc-800 text-white",
                  !isOpen && "justify-center",
                )}
              >
                <item.icon className={cn("h-4 w-4", item.color, isOpen && "mr-2")} />
                {isOpen && <span>{item.label}</span>}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="border-t border-zinc-700/50 p-2">
          <Link href="/setup">
            <Button className={cn("w-full bg-emerald-600 hover:bg-emerald-700", !isOpen && "px-0")}>
              <PlusCircle className={cn("h-4 w-4", isOpen && "mr-2")} />
              {isOpen && <span>New Session</span>}
            </Button>
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-zinc-900/50 backdrop-blur-sm transition-opacity",
          isOpen ? "lg:hidden" : "hidden",
        )}
        onClick={toggleSidebar}
      />
    </>
  )
}
