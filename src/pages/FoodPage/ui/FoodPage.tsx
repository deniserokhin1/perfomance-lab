import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import {
    ProductInfinityList,
    ProductListPagination,
    ProductPageFilters,
} from '@/features/ProductInfinityList'
import { PageWrapper } from '@/shared/ui/PageWrapper'

import cls from './FoodPage.module.scss'

export const FoodPage = () => {
    return (
        <>
            <HStack className={cls.height} justify="between" align="center">
                <HStack gap="32" align="center">
                    <Text title="Еда" />
                    <ProductPageFilters path="food" />
                </HStack>

                <ProductListPagination path="food" />
            </HStack>

            <PageWrapper>
                <ProductInfinityList path="food" />
            </PageWrapper>
        </>
    )
}
