import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { IGetJobsBrutParams } from "./jobs.query";

export const JobsPaginations = ({
  page,
  totalPages,
  getUrl,
}: {
  page: number;
  totalPages: number;
  getUrl: (newParams: IGetJobsBrutParams) => string;
}) => {
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getUrl({ page: 1 })}>
              <ChevronsLeft className="h-4 w-4" />
              <span>First</span>
            </PaginationPrevious>
          </PaginationItem>
        )}

        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getUrl({ page: page - 1 })} />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={getUrl({ page })} isActive={true}>
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {totalPages > page && (
          <PaginationItem>
            <PaginationNext href={getUrl({ page: page + 1 })} />
          </PaginationItem>
        )}

        {totalPages > page && (
          <PaginationItem>
            <PaginationNext href={getUrl({ page: totalPages })}>
              <span>Last</span>
              <ChevronsRight className="h-4 w-4" />
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
