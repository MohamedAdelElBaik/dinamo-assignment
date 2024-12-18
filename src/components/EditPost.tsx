"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Post, PostFormValues } from "@/src/types/Post";
import { usePostContext } from "../context/postContext";
import useCustomForm from "../hooks/useCustomForm";
import { Label } from "@/components/ui/label";

export default function EditForm({ post }: { post: Post }) {
  const initialFormValue: PostFormValues = {
    title: post.title,
    body: post.body,
  };

  const { editPost } = usePostContext();
  const { formValues, handleChange, handleSubmit } =
    useCustomForm<PostFormValues>(initialFormValue, (values) =>
      editPost(post.id, values.title, values.body)
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="body" className="text-right">
            Body
          </Label>
          <Input
            id="body"
            name="body"
            value={formValues.body}
            onChange={handleChange}
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
