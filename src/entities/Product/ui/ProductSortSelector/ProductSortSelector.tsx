import { memo, useMemo } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { type SortOrder } from '@/shared/types'
import { Select, type SelectOption } from '@/shared/ui/Select'
import { HStack } from '@/shared/ui/Stack'
import { ProductSortFeild } from '@/shared/const'

interface ArticleSortSelectorProps {
    className?: string
    sort: ProductSortFeild
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ProductSortFeild) => void
}

export const ProductSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: 'по возрастанию',
            },
            {
                value: 'desc',
                content: 'по убыванию',
            },
        ],
        []
    )

    const sortFeildOptions = useMemo<Array<SelectOption<ProductSortFeild>>>(
        () => [
            {
                value: ProductSortFeild.BRAND,
                content: 'марке',
            },
            {
                value: ProductSortFeild.DISCOUNT,
                content: 'скидке',
            },
            {
                value: ProductSortFeild.RATING,
                content: 'рейтингу',
            },
        ],
        []
    )

    const mods = {}

    return (
        <HStack gap="16" className={classNames('', mods, [className])}>
            <Select<ProductSortFeild>
                label="Сортировать по"
                options={sortFeildOptions}
                labelFitContent={true}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                label="порядок"
                options={orderOptions}
                labelFitContent={true}
                value={order}
                onChange={onChangeOrder}
            />
        </HStack>
    )
})
