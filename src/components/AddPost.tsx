import {
  Card,
  CardDescription,
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

      <AddPostForm />
    </Card>
  );
}
