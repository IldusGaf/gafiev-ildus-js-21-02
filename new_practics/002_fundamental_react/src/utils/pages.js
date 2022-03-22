export const getPageCount = (totalCount,limit) => Math.ceil(totalCount/limit);
export const getPagesArray = (totalPages) => {
    const result = [];
    for (let i=1;i<=totalPages;i++) {
        result.push(i);
    }
    return result;
}