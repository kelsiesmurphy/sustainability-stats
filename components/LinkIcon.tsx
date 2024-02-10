import { ExternalLink } from "lucide-react"
 
import { Button } from "@/components/ui/button"
 
export function LinkIcon() {
  return (
    <Button variant="ghost" size="icon">
      <ExternalLink className="h-4 w-4" />
    </Button>
  )
}