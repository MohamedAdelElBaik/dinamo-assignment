"use client";

import { createContext, useContext } from "react";
import { PostState } from "./postReducer";

export type PostContextType = {
  state: PostState;
  fetchAllPosts: () => Promise<void>;
  editPost: (id: number, title: string, body: string) => Promise<void>;
  deletePostById: (
    id: number,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  createPostFun: (
    body: { title: string; body: string },
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context)
    throw new Error("usePostContext must be used within PostProvider");
  return context;
};
