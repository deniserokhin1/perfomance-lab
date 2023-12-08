import { memo } from 'react'
import cls from './ClothPage.module.scss'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import {
    ProductInfinityList,
    ProductListPagination,
    ProductPageFilters,
} from '@/features/ProductInfinityList'
import { PageWrapper } from '@/shared/ui/PageWrapper'

export const ClothPage = memo(() => {
    return (
        <>
            <HStack className={cls.height} justify="between" align="center">
                <HStack gap="32" align="center">
                    <Text title="Одежда" />
                    <ProductPageFilters path="cloth" />
                </HStack>

                <ProductListPagination path="cloth" />
            </HStack>

            <PageWrapper>
                <ProductInfinityList path="cloth" />
            </PageWrapper>
        </>
    )
})
