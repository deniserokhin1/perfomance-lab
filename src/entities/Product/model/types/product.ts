export interface IProduct {
    id: number
    name: string
    price: number
    category: string
    description: string
    imageUrl: string
    stockQuantity: number
    discount?: number
}
