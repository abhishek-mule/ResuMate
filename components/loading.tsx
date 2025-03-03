import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative">
        <Loader2 className="h-12 w-12 animate-spin text-primary/80" />
        <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-primary/20" />
      </div>
      <p className="text-muted-foreground animate-pulse">Loading...</p>
    </div>
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="h-6 w-6 animate-spin text-primary/80" />
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-[200px] rounded bg-primary/10 animate-pulse" />
          <div className="h-4 w-[150px] rounded bg-primary/10 animate-pulse" />
        </div>
      </div>
    </div>
  )
}