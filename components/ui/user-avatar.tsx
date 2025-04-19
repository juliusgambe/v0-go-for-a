import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getAvatarColor } from "@/lib/avatar-utils"

interface UserAvatarProps {
  name: string
  src?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function UserAvatar({ name, src, className, size = "md" }: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  }

  return (
    <Avatar className={`${sizeClasses[size]} ${className || ""}`}>
      <AvatarFallback className={getAvatarColor(name)}>{initials}</AvatarFallback>
      <AvatarImage src={src || "/placeholder.svg"} alt={name} />
    </Avatar>
  )
}
