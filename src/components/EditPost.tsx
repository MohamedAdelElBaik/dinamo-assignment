"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Post } from "@/src/types/Post";
import { usePostContext } from "../context/postContext";

export default function EditForm({ post }: { post: Post }) {
  const { editPost } = usePostContext();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editPost(post.id, title, body);
      }}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="title" className="text-right">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="body" className="text-right">
            Body
          </label>
          <Input
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
}
