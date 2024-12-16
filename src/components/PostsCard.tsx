import PostTable from "@/src/components/PostTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PostsCard() {
  return (
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
  );
}
