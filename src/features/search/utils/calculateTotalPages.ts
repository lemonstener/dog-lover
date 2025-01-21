export const calculateTotalPages = (total: number, size: number) => {
    const totalPages = Math.floor(total / size);
    const leftover = total % size
    return leftover > 0 ? totalPages + 1 : totalPages - 1
}