import { ReactNode, memo } from 'react'

import { classNames } from '@/shared/lib/classNames'

import cls from './Text.module.scss'
import { TextAlign, TextSize, TextTheme } from '../../const'

interface TextProps {
    className?: string
    title?: string | number
    text?: string | number
    theme?: TextTheme
    align?: TextAlign
    minWidth?: boolean
    maxWidth?: boolean
    size?: TextSize
    children?: ReactNode
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        size = TextSize.M,
        theme = TextTheme.DEFAULT,
        align = TextAlign.LEFT,
        minWidth = false,
        maxWidth = false,
        children,
    } = props

    const mods = { [cls.fitContent]: minWidth, [cls.maxWidth]: maxWidth }

    return (
        <div className={classNames(cls.container, mods, [className, cls[theme], cls[size]])}>
            {title && <h2 className={classNames(cls.title, {}, [cls[align]])}>{title}</h2>}
            {text && (
                <p className={classNames(cls.text, {}, [cls[align]])}>
                    {text}
                    {children}
                </p>
            )}
        </div>
    )
})
