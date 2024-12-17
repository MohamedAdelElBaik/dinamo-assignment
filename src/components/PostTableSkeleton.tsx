import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostTableSkeleton() {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className="w-full h-4" />
          </TableHead>
          <TableHead className="hidden sm:table-cell">
            <Skeleton className="w-full h-4" />
          </TableHead>
          <TableHead>
            <Skeleton className="w-full h-4" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="w-full h-4" />
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Skeleton className="w-full h-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-4" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
