export const checkArrayDuplicates = (array: string[]) => {
    const duplicates: string[] = []
    array.sort()
    array.forEach((str, index) => {
        if (str === array[index + 1] && str) duplicates.push(str);

    })
    if (duplicates.length > 0)
        return duplicates.join(',')
    return null
}