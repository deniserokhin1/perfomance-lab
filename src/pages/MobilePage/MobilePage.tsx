import Gears from '@/shared/assets/gears.svg?react'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { TextAlign, TextSize } from '@/shared/const'

import cls from './MobilePage.module.scss'
import { text } from './model/const'

export const MobilePage = () => {
    return (
        <VStack className={cls.container} align="center" justify="evenly">
            <Card>
                <Text text={text} align={TextAlign.LEFT} size={TextSize.ML} />
            </Card>

            <Icon Svg={Gears} className={cls.svg} />
        </VStack>
    )
}
