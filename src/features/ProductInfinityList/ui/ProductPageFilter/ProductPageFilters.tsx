import { memo, useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'
import { Endpoints, type SortOrder } from '@/shared/types'
import { ProductSortFeild } from '@/shared/const'

import { ProductSortSelector } from '@/entities/Product'
import { fetchProductListByParams } from '../../model/services/fetchProductListByParams'
import { productListActions } from '../../model/slice/productListSlice'
import { getProductListFilter, getProductListOrder } from '../../model/selectors/getProductList'

interface ProductPageFiltersProps {
    path: Endpoints
}

export const ProductPageFilters = memo((props: ProductPageFiltersProps) => {
    const { path } = props
    const dispatch = useAppDispatch()

    const { setFilter, setSort, setPage } = productListActions
    const order = useAppSelector(getProductListOrder)
    const filter = useAppSelector(getProductListFilter)

    const fetchData = useCallback(() => {
        dispatch(fetchProductListByParams(path))
    }, [dispatch, path])

    const onChangeSort = useCallback(
        (order: SortOrder): void => {
            dispatch(setSort(order))
            fetchData()
        },
        [dispatch, fetchData, setSort]
    )

    const onChangeFilter = useCallback(
        (filter: ProductSortFeild): void => {
            dispatch(setFilter(filter))
            dispatch(setPage(1))
            fetchData()
        },
        [dispatch, fetchData, setFilter, setPage]
    )

    return (
        <ProductSortSelector
            order={order}
            sort={filter}
            onChangeOrder={onChangeSort}
            onChangeSort={onChangeFilter}
        />
    )
})
