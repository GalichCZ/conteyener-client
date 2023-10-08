export const useSearchThroughArray = (array: string[] | null, searchValue: string) => {
    if (!array) return null;
    if (!searchValue) return array;
    return array?.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase()));
}