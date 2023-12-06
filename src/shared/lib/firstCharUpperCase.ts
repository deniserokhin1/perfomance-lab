export const firstCharUpperCase = (str: string) => {
    return str === 'id' ? 'ID' : str[0].toUpperCase() + str.slice(1)
}
