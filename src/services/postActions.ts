import { Post } from "../types/Post";
import { deletePost } from "./postService";

export const handleDelete = async (
  id: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
) => {
  setIsLoading(true);
  try {
    await deletePost(id);
    setPosts((posts) => posts.filter((post) => post.id !== id));
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  } finally {
    setIsLoading(false);
  }
};
