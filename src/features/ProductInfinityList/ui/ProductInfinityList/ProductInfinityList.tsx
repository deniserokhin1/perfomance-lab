import { useEffect, type FC, useCallback } from 'react'

import { IProduct, ProductList } from '@/entities/Product'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'
import { Endpoints } from '@/shared/types'
import { cartActions } from '@/features/ProductCart'

import { fetchProductListByParams } from '../../model/services/fetchProductListByParams'
import {
    getProductListData,
    getProductListIsLoading,
} from '../../model/selectors/getProductList'
import { fetchProductList } from '../../model/services/fetchProductList'

interface ProductInfinityListProps {
    className?: string
    path: Endpoints
}

export const ProductInfinityList: FC<ProductInfinityListProps> = (props) => {
    const { path } = props
    const dispatch = useAppDispatch()

    const data = useAppSelector(getProductListData)
    const isLoading = useAppSelector(getProductListIsLoading)

    const { addProduct } = cartActions

    const onAddCartItem = useCallback(
        (product: IProduct) => () => {
            dispatch(addProduct(product))
        },
        [dispatch, addProduct]
    )

    useEffect(() => {
        dispatch(fetchProductListByParams(path))
        dispatch(fetchProductList(path))
    }, [dispatch, path])

    return (
        <ProductList products={data} isLoading={isLoading} addCartItem={onAddCartItem} />
    )
}
