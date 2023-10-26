export const useColorText = (stringValue: string, searchValue: string) => {
    if (!stringValue || searchValue === "") {
        return ""
    }
    const hasSubString = stringValue.includes(searchValue);

    return hasSubString ? "bg-orange-200" : ""
}