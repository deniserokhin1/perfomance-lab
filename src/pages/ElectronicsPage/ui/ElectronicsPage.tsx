import { ProductList } from '@/entities/Product'
import { IProduct } from '@/entities/Product'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { Text } from '@/shared/ui/Text'

const sampleProduct: IProduct = {
    id: 1,
    name: 'Смартфон Honor 90 Lite 8/256 ГБ',
    price: 499.99,
    category: 'электроника',
    description: 'Высокопроизводительный смартфон с передовыми функциями.',
    imageUrl: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6776494494.jpg',
    stockQuantity: 50,
    discount: 10,
}
const sampleProduct2: IProduct = {
    id: 1,
    name: 'Смартфон Honor 90 Lite 8/256 ГБ',
    price: 499.99,
    category: 'электроника',
    description: 'Высокопроизводительный смартфон с передовыми функциями.',
    imageUrl: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6766392995.jpg',
    stockQuantity: 50,
    discount: 10,
}

const ElectronicsPage = () => {
    return (
        <>
            <Text title="Электроника" />
            <PageWrapper>
                <ProductList products={[sampleProduct, sampleProduct2]} />
            </PageWrapper>
        </>
    )
}

export default ElectronicsPage
