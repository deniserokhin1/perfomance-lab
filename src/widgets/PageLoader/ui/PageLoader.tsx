import { type FC } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { SpinerDots } from '@/shared/ui/SpinerDots'

import cls from './PageLoader.module.scss'
import { SpinerDotsTheme } from '@/shared/const'

interface PageLoaderProps {
    className?: string
    theme?: SpinerDotsTheme
    stateSideBar?: boolean
    big?: boolean
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className, theme, stateSideBar, big = true } = props

    const mods = {
        [cls.big]: big,
        [cls.open]: stateSideBar,
    }

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <SpinerDots theme={theme} />
        </div>
    )
}
