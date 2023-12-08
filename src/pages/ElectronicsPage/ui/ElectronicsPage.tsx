import { ProductInfinityList, ProductPageFilters } from '@/features/ProductInfinityList'
import { ProductListPagination } from '@/features/ProductInfinityList'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './ElectronicsPage.module.scss'

const ElectronicsPage = () => {
    return (
        <>
            <HStack className={cls.height} justify="between" align="center">
                <HStack gap="32" align="center">
                    <Text minWidth={true} title="Электроника" />
                    <ProductPageFilters path="electronics" />
                </HStack>

                <ProductListPagination path="electronics" />
            </HStack>

            <PageWrapper>
                <ProductInfinityList path="electronics" />
            </PageWrapper>
        </>
    )
}

export default ElectronicsPage
