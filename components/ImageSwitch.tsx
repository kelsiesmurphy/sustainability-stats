import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function ImageSwitch({showImage, setShowImage}:any) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="image" checked={showImage} onCheckedChange={() => setShowImage(!showImage)}/>
      <Label htmlFor="image">HTML Page with image element</Label>
    </div>
  )
}
