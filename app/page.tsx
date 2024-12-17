"use client";

import AddPost from "@/src/components/AddPost";
import PostsCard from "@/src/components/PostsCard";
import { PostProvider } from "@/src/context/postProvider";

export default function Home() {
  return (
    <PostProvider>
      <div className="p-1 m-1 md:p-2 md:m-2">
        <div className="grid gap-4 lg:grid-cols-2">
          <section>
            <AddPost />
          </section>

          <section>
            <PostsCard />
          </section>
        </div>
      </div>
    </PostProvider>
  );
}
