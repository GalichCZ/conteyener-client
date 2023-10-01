export const checkArrayDuplicates = (array: string[]) => {
    const uniqueSet = new Set(array);
    return uniqueSet.size !== array.length;
}