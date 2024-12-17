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

const initialState: PostState = {
  posts: [],
  loading: true,
  deleteLoading: false,
};

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const editPost = async (id: number, title: string, body: string) => {
    try {
      await updatePost(id, { title, body });
      dispatch({ type: "EDIT_POST", payload: { id, title, body } });
    } catch (error) {
      console.error("Error editing post", error);
    }
  };

  const deletePostById = async (
    id: number,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    // dispatch({ type: "SET_DELETE_LOADING", payload: true });
    try {
      await deletePost(id);
      dispatch({ type: "DELETE_POST", payload: id });
    } catch (error) {
      console.error("Error deleting post", error);
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
