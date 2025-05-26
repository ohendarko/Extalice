export function paginate<T>(array: T[], page: number = 1, pageSize: number = 5) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedItems = array.slice(start, end);

  return {
    data: paginatedItems,
    total: array.length,
    totalPages: Math.ceil(array.length / pageSize),
  };
}