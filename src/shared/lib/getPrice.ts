export const getCurrentPrice = (price: number, discount: number = 0) => {
    const currentPrice = Math.ceil(price * ((100 - discount) / 100))
        .toLocaleString(undefined, { useGrouping: true })
        .replace(/,/g, ' ')
    return `${currentPrice} ₽`
}

export const getDiscount = (discount: number = 0) => {
    if (!discount) return
    return `-${discount}%`
}
