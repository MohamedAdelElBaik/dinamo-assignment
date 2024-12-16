import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostTableRowSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="w-full h-4" />
      </TableCell>

      <TableCell>
        <Skeleton className="w-full h-4" />
      </TableCell>

      <TableCell>
        <Skeleton className="w-full h-4" />
      </TableCell>
    </TableRow>
  );
}
