import { IProduct } from '@/entities/Product'
import { ProductSortFeild } from '@/shared/const'
import { SortOrder } from '@/shared/types'

export interface ProductListSchema {
    data: IProduct[]
    isLoading: boolean
    error?: string | number | undefined

    // pagination
    limit: number
    page: number
    hasMore: boolean
    totalPages?: number

    // sort and filter
    sort: SortOrder
    filter: ProductSortFeild
}
