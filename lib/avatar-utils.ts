// Generate consistent colors based on name
export function getAvatarColor(name: string): string {
  const colors = [
    "bg-blue-500",
    "bg-emerald-500",
    "bg-purple-500",
    "bg-amber-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-rose-500",
    "bg-cyan-500",
    "bg-orange-500",
    "bg-teal-500",
  ]

  // Simple hash function to get consistent color for a name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % colors.length
  return colors[index]
}

// Generate placeholder avatar SVG based on name
export function getPlaceholderAvatar(name: string): string {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  // Create a data URI for an SVG with the initials
  const color = getColorHexFromName(name)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" fill="${color}" />
      <text x="50" y="50" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central" dy="2">
        ${initials}
      </text>
    </svg>
  `

  return `data:image/svg+xml;base64,${btoa(svg.trim())}`
}

// Get a hex color based on name
function getColorHexFromName(name: string): string {
  const colors = [
    "#3B82F6", // blue-500
    "#10B981", // emerald-500
    "#8B5CF6", // purple-500
    "#F59E0B", // amber-500
    "#EC4899", // pink-500
    "#6366F1", // indigo-500
    "#F43F5E", // rose-500
    "#06B6D4", // cyan-500
    "#F97316", // orange-500
    "#14B8A6", // teal-500
  ]

  // Simple hash function to get consistent color for a name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % colors.length
  return colors[index]
}
