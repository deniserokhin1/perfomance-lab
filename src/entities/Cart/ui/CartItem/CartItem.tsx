import { memo } from 'react'

import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { TextSize } from '@/shared/const'
import { getCurrentPrice } from '@/shared/lib/getPrice'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import Trash from '@/shared/assets/trash.svg?react'
import { ICartProduct } from '@/features/ProductCart'

import cls from './CartItem.module.scss'

interface CartItemProps {
    className?: string
    item: ICartProduct
    onDeleteCartItem?: (id: number) => () => void
}

export const CartItem = memo((props: CartItemProps) => {
    const { item, onDeleteCartItem } = props

    return (
        <Card>
            <HStack justify="between">
                <HStack gap="8">
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton borderRadius="4px" className={cls.img} />}
                            errorFallback={
                                <Skeleton borderRadius="4px" className={cls.img} />
                            }
                            src={item?.imageUrl}
                            className={cls.img}
                        />
                    </div>

                    <VStack className={cls.textBlockWidth}>
                        <Text text={item.brand} size={TextSize.LS} />
                        <Text text={item?.title} size={TextSize.LS} minWidth={true} />
                        <Text
                            title={getCurrentPrice(item.price, item.discount)}
                            size={TextSize.S}
                        />
                    </VStack>
                </HStack>

                <Text text={`x${item.amount}`} />

                <Button onClick={onDeleteCartItem?.(item.id)} className={cls.container}>
                    <Icon Svg={Trash} />
                </Button>
            </HStack>
        </Card>
    )
})
