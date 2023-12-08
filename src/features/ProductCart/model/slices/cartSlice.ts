import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { CartSchema } from '../types/cartSchema'
import { IProduct } from '@/entities/Product'

const initialState: CartSchema = {
    isOpen: false,
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const { id } = action.payload

            const existingProductIndex = state.products.findIndex(
                (item) => item.id === id
            )
            const isAddedProduct = existingProductIndex !== -1

            isAddedProduct
                ? (state.products[existingProductIndex].amount += 1)
                : state.products.push({ ...action.payload, amount: 1 })
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((i) => i.id !== action.payload)
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
})

export const { actions: cartActions } = cartSlice
export const { reducer: cartReducer } = cartSlice
