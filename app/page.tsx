"use client";

import { Toaster } from "@/components/ui/toaster";
import AddPost from "@/src/components/AddPost";
import PostsCard from "@/src/components/PostsCard";
import { PostProvider } from "@/src/context/postProvider";

export default function Home() {
  return (
    <PostProvider>
      <main className="w-full py-4 md:py-8">
        <div className="container mx-auto grid gap-4 lg:grid-cols-2 px-4">
          <section>
            <AddPost />
          </section>

          <section>
            <PostsCard />
          </section>
        </div>
      </main>

      <Toaster />
    </PostProvider>
  );
}
