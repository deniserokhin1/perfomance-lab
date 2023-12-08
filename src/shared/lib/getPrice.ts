export const getCurrentPrice = (price: number, discount: number = 0) => {
    const currentPriceNumber = getCurrentPriceNumber(price, discount)
    const currentPriceFormated = getCurrentPriceFormated(currentPriceNumber)

    return `${currentPriceFormated} ₽`
}

export const getDiscount = (discount: number = 0) => {
    if (!discount) return
    return `-${discount}%`
}

export const getCurrentPriceNumber = (price: number, discount: number = 0) => {
    return Math.ceil(price * ((100 - discount) / 100))
}

export const getCurrentPriceFormated = (price: number) => {
    return price.toLocaleString(undefined, { useGrouping: true }).replace(/,/g, ' ')
}
