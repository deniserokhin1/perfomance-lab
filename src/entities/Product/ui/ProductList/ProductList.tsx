import { classNames } from '@/shared/lib/classNames'
import { Text } from '@/shared/ui/Text'

import { ProductListItem } from '../ProductListItem/ProductListItem'
import cls from './ProductList.module.scss'
import { ProductListItemSkeleton } from '../ProductListItem/ProductListItemSkeleton'
import { IProduct } from '../../model/types/product'

interface ProductListProps {
    className?: string
    isLoading?: boolean
    products?: IProduct[]
}

export const ProductList = (props: ProductListProps) => {
    const { className, isLoading, products } = props

    const skeletons = (): JSX.Element[] => {
        return new Array(9).fill(1).map((_, index) => <ProductListItemSkeleton key={index} />)
    }

    if (!isLoading && !products?.length) {
        return <Text title="Товары не найдены" />
    }

    return (
        <div className={classNames(cls.tile, {}, [className])}>
            {products?.map((i, index) => (
                <ProductListItem key={index} item={i} />
            ))}
            {isLoading && skeletons()}
        </div>
    )
}
