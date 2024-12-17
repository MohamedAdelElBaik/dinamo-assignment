"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import PostTableSkeleton from "./PostTableSkeleton";
import PostTableRow from "./PostTableRow";
import { usePostContext } from "../context/postContext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PostTable() {
  const { fetchAllPosts, state } = usePostContext();
  const { loading, posts } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    fetchAllPosts();
  }, []);

  if (loading) return <PostTableSkeleton />;

  return (
    <div className="">
      <div className="">
        <Table className="border border-green-600/30 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Body</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedPosts.map((post) => (
              <PostTableRow post={post} key={post.id + post.title} />
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
