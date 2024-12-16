"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Post } from "@/src/types/Post";
import { useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";
import PostTableSkeleton from "./PostTableSkeleton";
import PostTableRow from "./PostTableRow";

export default function PostTable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <PostTableSkeleton />;

  return (
    <div className="">
      <div className="overflow-x-auto">
        <Table className="text-primary border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Body</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <PostTableRow post={post} setPosts={setPosts} key={post.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
