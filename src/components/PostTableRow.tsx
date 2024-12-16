"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, Trash, MoreHorizontal } from "lucide-react";
import EditForm from "./EditPost";
import { Post } from "@/src/types/Post";
import { useState } from "react";
import PostTableRowSkeleton from "./PostTableRowSkeleton";
import { handleDelete } from "../services/postActions";
import { updatePost } from "../services/postService";

export default function PostTableRow({
  post,
  setPosts,
}: {
  post: Post;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async (id: number, newTitle: string, newBody: string) => {
    setIsLoading(true);
    try {
      await updatePost(id, { id, title: newTitle, body: newBody });

      setPosts((posts) =>
        posts.map((post) =>
          post.id === id ? { ...post, title: newTitle, body: newBody } : post
        )
      );
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <PostTableRowSkeleton />;

  return (
    <TableRow>
      <TableCell>{post.title}</TableCell>
      <TableCell className="hidden sm:table-cell">{post.body}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Pencil className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Post</DialogTitle>
                </DialogHeader>
                <EditForm post={post} onSave={handleEdit} />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="text-red-600"
                >
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Are you sure you want to delete this post?
                  </DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleDelete(post.id, setIsLoading, setPosts)
                    }
                  >
                    Yes, delete it
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
