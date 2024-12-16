// import Image from "next/image";

import AddPost from "@/src/components/AddPost";
import PostsCard from "@/src/components/PostsCard";

export default function Home() {
  return (
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
  );
}
