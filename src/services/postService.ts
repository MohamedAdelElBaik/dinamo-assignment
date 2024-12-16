import apiClient from "./apiClient";
import { Post } from "@/src/types/Post";

export const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await apiClient.get("/posts");
  return data;
};

export const createPost = async (post: Partial<Post>): Promise<Post> => {
  const { data } = await apiClient.post("/posts", post);
  return data;
};

export const updatePost = async (
  id: number,
  post: Partial<Post>
): Promise<Post> => {
  const { data } = await apiClient.put(`/posts/${id}`, post);
  return data;
};

export const deletePost = async (id: number): Promise<void> => {
  await apiClient.delete(`/posts/${id}`);
};
