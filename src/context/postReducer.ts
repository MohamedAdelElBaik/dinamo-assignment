import { Post } from "@/src/types/Post";

export type PostState = {
  posts: Post[];
  loading: boolean;
  deleteLoading: boolean;
};

type PostAction =
  | { type: "FETCH_POSTS"; payload: Post[] }
  | { type: "DELETE_POST"; payload: number }
  | { type: "EDIT_POST"; payload: { id: number; title: string; body: string } }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_DELETE_LOADING"; payload: boolean }
  | {
      type: "CREATE_POST";
      payload: { id: number; title: string; body: string };
    };

export const postReducer = (
  state: PostState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload, loading: false };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
      };

    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.payload.id
            ? { ...p, title: action.payload.title, body: action.payload.body }
            : p
        ),
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_DELETE_LOADING":
      return { ...state, deleteLoading: action.payload };

    case "CREATE_POST":
      return { ...state, posts: [action.payload, ...state.posts] };

    default:
      return state;
  }
};
