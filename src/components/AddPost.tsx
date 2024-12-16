import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddPostForm from "./AddPostForm";

export default function AddPost() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add new post</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente vero
          debitis.
        </CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <AddPostForm />
        </CardContent>
        <CardFooter>
          <Button type="button">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
