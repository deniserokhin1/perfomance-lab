import { ThunkConfig } from '@/app/providers/StoreProvider'
import { IProduct } from '@/entities/Product'
import { Endpoints } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductList = createAsyncThunk<number, Endpoints, ThunkConfig<string>>(
    'productListSlice/fetchProductList',
    async (path, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<IProduct[]>(`/${path}`)

            if (!response.data) throw new Error()

            return response.data.length
        } catch (error) {
            console.log(error)
            return rejectWithValue('Error while fetching technologies list.')
        }
    }
)
