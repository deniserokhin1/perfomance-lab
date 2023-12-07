import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { ButtonTheme } from '@/shared/const'
import { Endpoints } from '@/shared/types'

import {
    getProductListPageNum,
    getProductListTotalPages,
} from '../../model/selectors/getProductList'
import { productListActions } from '../../model/slice/productListSlice'
import { fetchProductListByParams } from '../../model/services/fetchProductListByParams'

interface ProductListPaginationProps {
    className?: string
    path: Endpoints
}

export const ProductListPagination = (props: ProductListPaginationProps) => {
    const { path } = props
    const dispatch = useAppDispatch()

    const totalPages = useAppSelector(getProductListTotalPages)
    const currentPage = useAppSelector(getProductListPageNum)

    const { setPage } = productListActions

    const onChangePage = useCallback(
        (page: number) => () => {
            if (page === currentPage) return
            dispatch(setPage(page))
            dispatch(fetchProductListByParams(path))
        },
        [currentPage, dispatch, setPage, path]
    )

    return (
        <HStack gap="8">
            {new Array(totalPages).fill(0).map((_, index) => {
                const page = index + 1
                return (
                    <Button
                        key={page}
                        onClick={onChangePage(page)}
                        children={page}
                        theme={currentPage === page ? ButtonTheme.BACKGROUND : ButtonTheme.OUTLINE}
                    />
                )
            })}
        </HStack>
    )
}
