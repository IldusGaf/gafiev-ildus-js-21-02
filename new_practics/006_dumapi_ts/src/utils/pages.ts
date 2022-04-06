/*eslint-disable*/
export const getPageCount = (totalCount: number, limit: number): number => Math.ceil(totalCount / limit);
export const getPagesArray = (totalPages: number) => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i);
  }
  return result;
};
