// import Image from "next/image";

import PostTable from "@/components/PostTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-1 m-1 md:p-2 md:m-2">
      <div className="grid gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add new post</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                sapiente vero debitis.
              </CardDescription>
            </CardHeader>
            <form>
              <CardContent>
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
              </CardContent>
              <CardFooter>
                <Button type="button">Submit</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>All posts</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <PostTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
