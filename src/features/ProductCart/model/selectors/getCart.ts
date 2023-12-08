import { StateSchema } from '@/app/providers/StoreProvider'

export const getCartIsOpen = (state: StateSchema) => state.cart.isOpen
export const getCartProducts = (state: StateSchema) => state.cart.products
