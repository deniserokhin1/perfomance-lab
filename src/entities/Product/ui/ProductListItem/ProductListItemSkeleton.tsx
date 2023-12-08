import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'

import cls from './ProductListItem.module.scss'

interface ProductListItemSkeletonProps {
    className?: string
}

export const ProductListItemSkeleton = memo((props: ProductListItemSkeletonProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.tile, {}, [className])}>
            <Card className={classNames(cls.card)} maxHeight={true}>
                <div className={cls.imageWrapperSkeleton}>
                    <Skeleton className={cls.img} type="short" />
                </div>
            </Card>
        </div>
    )
})
