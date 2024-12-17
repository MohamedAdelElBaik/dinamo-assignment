"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
// import { createPost } from "../services/postService";
import { usePostContext } from "../context/postContext";

const initialFormValue = { title: "", body: "" };

export default function AddPostForm() {
  const [formValues, setFormValues] = useState(initialFormValue);
  const [isLoading, setIsLoading] = useState(false);
  const { createPostFun } = usePostContext();

  function haveContent() {
    if (!formValues.title || !formValues.body) return false;

    return true;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name: key, value } = e.target;
    setFormValues((val) => ({ ...val, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createPostFun(formValues, setIsLoading);
    setFormValues(initialFormValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="title" className="text-xl">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Add post title"
              onChange={handleChange}
              value={formValues.title}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="body" className="text-xl md:text-5xl">
              Body
            </Label>
            <Textarea
              id="body"
              name="body"
              placeholder="Add post body"
              onChange={handleChange}
              value={formValues.body}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" disabled={!haveContent() || isLoading}>
          {!isLoading ? "Submit" : "Loading..."}
        </Button>
      </CardFooter>
    </form>
  );
}
