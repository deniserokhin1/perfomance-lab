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

    const mods = {}

    return (
        <div className={classNames(cls.tile, mods, [className])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} type="short" />
                </div>
            </Card>
        </div>
    )
})
