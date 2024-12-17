"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import PostTableSkeleton from "./PostTableSkeleton";
import PostTableRow from "./PostTableRow";
import { usePostContext } from "../context/postContext";

export default function PostTable() {
  const { fetchAllPosts, state } = usePostContext();
  const { loading, posts } = state;

  useEffect(() => {
    fetchAllPosts();
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
              <PostTableRow post={post} key={post.id + post.title} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
