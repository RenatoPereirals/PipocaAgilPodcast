export class Pagination {
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalItems: number = 0;
  totalPages: number = 0;
}

export class PaginatedResult<T> {
  result!: T;
  pagination!: Pagination;
}
