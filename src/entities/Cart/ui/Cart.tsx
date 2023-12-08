import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames'

import cls from './Cart.module.scss'
import { CartItem } from './CartItem/CartItem'
import { Text } from '@/shared/ui/Text'
import { TextAlign } from '@/shared/const'
import { VStack } from '@/shared/ui/Stack'
import { ICartProduct } from '@/features/ProductCart'

interface CartProps {
    className?: string
    isOpen: boolean
    products: ICartProduct[]
    totalSum?: string
    onDeleteCartItem?: (id: number) => () => void
}

export const Cart = memo((props: CartProps) => {
    const { className, isOpen = false, products, onDeleteCartItem, totalSum } = props

    const mods = {
        [cls.isOpen]: isOpen,
    }

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {products.length ? (
                <VStack gap="8">
                    <Text title={totalSum} />

                    {products.map((i) => (
                        <CartItem
                            item={i}
                            key={i.id}
                            onDeleteCartItem={onDeleteCartItem}
                        />
                    ))}
                </VStack>
            ) : (
                <Text title="Корзина пуста" align={TextAlign.CENTER} />
            )}
        </div>
    )
})
