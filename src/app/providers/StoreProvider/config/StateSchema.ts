import { ProductListSchema } from '@/features/ProductInfinityList'
import { type AxiosInstance } from 'axios'

export interface StateSchema {
    productList: ProductListSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
