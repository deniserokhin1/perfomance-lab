import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@/entities/Product'
import { ProductSortFeild } from '@/shared/const'
import { SortOrder } from '@/shared/types'

import { ProductListSchema } from '../types/productListSchema'
import { fetchProductListByParams } from '../services/fetchProductListByParams'
import { fetchProductList } from '../services/fetchProductList'

const initialState: ProductListSchema = {
    isLoading: false,
    data: [],
    filter: ProductSortFeild.DISCOUNT,
    hasMore: true,
    limit: 10,
    page: 1,
    sort: 'desc',
}

const productListSlice = createSlice({
    name: 'productListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setSort: (state, action: PayloadAction<SortOrder>) => {
            state.sort = action.payload
        },

        setFilter: (state, action: PayloadAction<ProductSortFeild>) => {
            state.filter = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductListByParams.pending, (state) => {
                state.data = []
                state.isLoading = true
            })
            .addCase(
                fetchProductListByParams.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.isLoading = false
                    state.data = action.payload
                }
            )
            .addCase(fetchProductListByParams.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchProductList.pending, (state) => {
                state.totalPages = 0
                state.isLoading = true
            })
            .addCase(fetchProductList.fulfilled, (state, action: PayloadAction<number>) => {
                state.isLoading = false
                state.totalPages = Math.ceil(action.payload / state.limit)
            })
            .addCase(fetchProductList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: productListActions, reducer: productListReducer } = productListSlice
