export const stringCut = (str: string | undefined, len: number | undefined) => {
    if (str && len && str.length > len) {
        return str.slice(0, len) + '...'
    }
    return str
}