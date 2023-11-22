export const useColorText = (stringValue: string, searchValue: string) => {
    if (!stringValue || searchValue === "") {
        return ""
    }
    const hasSubString = stringValue.toLowerCase().toString().includes(searchValue.toLowerCase());

    return hasSubString ? "bg-orange-200" : ""
}