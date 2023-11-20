export const useColorText = (stringValue: string, searchValue: string) => {
    if (!stringValue || searchValue === "") {
        return ""
    }
    const hasSubString = stringValue.toString().includes(searchValue);

    return hasSubString ? "bg-orange-200" : ""
}