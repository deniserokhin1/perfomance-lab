import { StateSchema } from '@/app/providers/StoreProvider'

export const getProductListData = (state: StateSchema) => state.productList.data
export const getProductListIsLoading = (state: StateSchema) => state.productList.isLoading
export const getProductListError = (state: StateSchema) => state.productList.error
export const getProductListFilter = (state: StateSchema) => state.productList.filter
export const getProductListHasMore = (state: StateSchema) => state.productList.hasMore
export const getProductListLimit = (state: StateSchema) => state.productList.limit
export const getProductListPageNum = (state: StateSchema) => state.productList.page
export const getProductListOrder = (state: StateSchema) => state.productList.sort
export const getProductListTotalPages = (state: StateSchema) => state.productList.totalPages
