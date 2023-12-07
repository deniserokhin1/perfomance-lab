import { StateSchema, ThunkConfig } from '@/app/providers/StoreProvider'
import { IProduct } from '@/entities/Product'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getProductListFilter,
    getProductListLimit,
    getProductListOrder,
    getProductListPageNum,
} from '../selectors/getProductList'
import { Endpoints } from '@/shared/types'

export const fetchProductListByParams = createAsyncThunk<
    IProduct[],
    Endpoints,
    ThunkConfig<string>
>('productListSlice/fetchProductListByParams', async (path, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const limit = getProductListLimit(getState() as StateSchema)
    const page = getProductListPageNum(getState() as StateSchema)
    const order = getProductListOrder(getState() as StateSchema)
    const sort = getProductListFilter(getState() as StateSchema)

    try {
        const response = await extra.api.get<IProduct[]>(`/${path}`, {
            params: {
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
            },
        })

        if (!response.data) throw new Error()

        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue('Error while fetching technologies list.')
    }
})
