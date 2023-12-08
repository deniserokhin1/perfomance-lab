import { IProduct } from '@/entities/Product'

export interface ICartProduct extends IProduct {
    amount: number
}

export interface CartSchema {
    isOpen: boolean
    products: ICartProduct[]
}
