import { useState } from "react";
import { Post } from "@/src/types/Post";

export default function usePostData(initialPosts: Post[]) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleEdit = (id: number, newTitle: string, newBody: string) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, title: newTitle, body: newBody } : post
      )
    );
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return { posts, handleEdit, handleDelete };
}
