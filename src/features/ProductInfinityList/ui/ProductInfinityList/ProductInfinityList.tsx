import { useEffect, type FC } from 'react'

import { ProductList } from '@/entities/Product'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'
import { Endpoints } from '@/shared/types'

import { fetchProductListByParams } from '../../model/services/fetchProductListByParams'
import { getProductListData, getProductListIsLoading } from '../../model/selectors/getProductList'
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

    useEffect(() => {
        dispatch(fetchProductListByParams(path))
        dispatch(fetchProductList(path))
    }, [dispatch, path])

    return <ProductList products={data} isLoading={isLoading} />
}
