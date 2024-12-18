"use client";

import React, { useReducer, useEffect, ReactNode } from "react";
import { PostContext } from "./postContext";
import { postReducer, PostState } from "./postReducer";
import {
  fetchPosts,
  deletePost,
  updatePost,
  createPost,
} from "@/src/services/postService";
import { useToast } from "@/hooks/use-toast";
import getFormattedCurrentTime from "../utils/formattedCurrentTime";

const initialState: PostState = {
  posts: [],
  loading: true,
  deleteLoading: false,
};

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { toast } = useToast();

  const fetchAllPosts = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const posts = await fetchPosts();
      dispatch({ type: "FETCH_POSTS", payload: posts });
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  const createPostFun = async (
    body: { title: string; body: string },
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    try {
      const res = await createPost(body);
      dispatch({ type: "CREATE_POST", payload: res });
      console.log(res);

      toast({
        title: "Post Created",
        description: `Your post "${
          body.title
        }" was successfully created at ${getFormattedCurrentTime()}.`,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Failed to Create Post",
        description: `An error occurred while trying to create the post "${body.title}". Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const editPost = async (id: number, title: string, body: string) => {
    try {
      await updatePost(id, { title, body });
      dispatch({ type: "EDIT_POST", payload: { id, title, body } });

      toast({
        title: "Post Updated",
        description: `Your post "${title}" was successfully updated at ${getFormattedCurrentTime()}.`,
      });
    } catch (error) {
      console.error("Error editing post", error);

      toast({
        title: "Failed to Update Post",
        description: `An error occurred while trying to update the post "${title}". Please try again.`,
        variant: "destructive",
      });
    }
  };

  const deletePostById = async (
    { id, title }: { id: number; title: string },
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    // dispatch({ type: "SET_DELETE_LOADING", payload: true });
    try {
      await deletePost(id);
      dispatch({ type: "DELETE_POST", payload: id });

      toast({
        title: "Post Removed",
        description: `Your post "${title}" was successfully deleted at ${getFormattedCurrentTime()}.`,
      });
    } catch (error) {
      console.error("Error deleting post", error);

      toast({
        title: "Failed to Delete Post",
        description: `An error occurred while trying to delete the post "${title}". Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ state, fetchAllPosts, createPostFun, editPost, deletePostById }}
    >
      {children}
    </PostContext.Provider>
  );
};
