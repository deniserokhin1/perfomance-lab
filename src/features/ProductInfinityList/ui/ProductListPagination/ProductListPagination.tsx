import { useCallback, useLayoutEffect } from 'react'

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
import cls from './ProductListPagination.module.scss'
import { classNames } from '@/shared/lib/classNames'

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

    useLayoutEffect(() => {
        dispatch(setPage(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChangePage = useCallback(
        (page: number) => () => {
            if (page === currentPage) return
            dispatch(setPage(page))
            dispatch(fetchProductListByParams(path))
        },
        [currentPage, dispatch, setPage, path]
    )

    const mods = {
        [cls.show]: !!totalPages,
    }

    return (
        <HStack className={classNames(cls.container, mods)} gap="8">
            {new Array(totalPages).fill(0).map((_, index) => {
                const page = index + 1
                return (
                    <Button
                        key={page}
                        onClick={onChangePage(page)}
                        children={page}
                        theme={
                            currentPage === page
                                ? ButtonTheme.BACKGROUND
                                : ButtonTheme.OUTLINE
                        }
                    />
                )
            })}
        </HStack>
    )
}
