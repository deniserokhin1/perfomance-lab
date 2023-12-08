import { classNames } from '@/shared/lib/classNames'
import { Card } from '@/shared/ui/Card'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { ButtonTheme, TextSize, TextTheme } from '@/shared/const'
import StarIcon from '@/shared/assets/star.svg?react'
import { Icon } from '@/shared/ui/Icon'
import { Button } from '@/shared/ui/Button'
import { getCurrentPrice, getDiscount } from '@/shared/lib/getPrice'

import cls from './ProductListItem.module.scss'
import { IProduct } from '../../model/types/product'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ArticleListItemProps {
    className?: string
    item: IProduct
    addCartItem?: (product: IProduct) => () => void
}

export const ProductListItem = (props: ArticleListItemProps) => {
    const { className, item, addCartItem } = props

    const mods = {
        [cls.hideRating]: !item.rating,
    }

    return (
        <div className={classNames(cls.tile, {}, [className, cls.show])}>
            <Card className={classNames(cls.card)} maxHeight={true}>
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
                <VStack gap="4">
                    <Text title={item.brand} size={TextSize.S} />
                    <Text title={item?.title} size={TextSize.S} minWidth={true} />

                    <HStack gap="4">
                        <Text
                            title={getCurrentPrice(item.price, item.discount)}
                            size={TextSize.M}
                            theme={item.discount ? TextTheme.PRICE : TextTheme.DEFAULT}
                        />

                        {!!item.discount && (
                            <Text
                                title={item.price}
                                size={TextSize.S}
                                theme={TextTheme.CROSSED}
                            />
                        )}

                        <Text text={getDiscount(item.discount)} theme={TextTheme.PRICE} />
                    </HStack>

                    <HStack className={classNames(cls.rating, mods)} gap="8">
                        <Icon Svg={StarIcon} />
                        <Text text={item.rating} />
                    </HStack>

                    <Button
                        onClick={addCartItem?.(item)}
                        theme={ButtonTheme.BACKGROUND_BUY}
                    >
                        В корзину
                    </Button>
                </VStack>
            </Card>
        </div>
    )
}
