import { classNames } from '@/shared/lib/classNames'
import { Card } from '@/shared/ui/Card'
import { AppImage } from '@/shared/ui/AppImage'

import cls from './ProductListItem.module.scss'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { TextSize } from '@/shared/const'

interface ArticleListItemProps {
    className?: string
    src: string
    name: string
    descr: string
}

export const ProductListItem = (props: ArticleListItemProps) => {
    const { className, src, name, descr } = props

    const mods = {}

    return (
        <div className={classNames(cls.tile, mods, [className])}>
            <Card className={cls.card} maxHeight={true}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton borderRadius="4px" className={cls.img} />}
                        errorFallback={<Skeleton borderRadius="4px" className={cls.img} />}
                        src={src}
                        className={cls.img}
                    />
                </div>
                <div className={cls.text}>
                    <Text title={name} size={TextSize.S} />
                    <Text text={descr} size={TextSize.S} />
                </div>
            </Card>
        </div>
    )
}
