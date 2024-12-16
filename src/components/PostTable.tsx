"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import usePostData from "@/src/hooks/usePostData";
import { Post } from "@/src/types/Post";

export default function PostTable() {
  const initialPosts: Post[] = [
    { id: 1, title: "First Post", body: "This is the first post" },
    { id: 2, title: "Second Post", body: "This is the second post" },
    { id: 3, title: "Third Post", body: "This is the third post" },
  ];

  const { posts, handleEdit, handleDelete } = usePostData(initialPosts);

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
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  {post.body}
                </TableCell>
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
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
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
                              onClick={() => handleDelete(post.id)}
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
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
