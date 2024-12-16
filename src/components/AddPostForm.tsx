import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddPostForm() {
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-base md:text-lg">Title</Label>
        <Input />
      </div>
      <div>
        <Label className="text-base md:text-lg">Body</Label>
        <Textarea />
      </div>
    </div>
  );
}
