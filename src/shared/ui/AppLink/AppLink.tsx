import { type ForwardedRef, forwardRef, type ReactNode } from 'react'

import { Link, type LinkProps } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames'

import cls from './AppLink.module.scss'
import { AppLinkTheme } from '../../const'

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    theme?: AppLinkTheme
    animation?: boolean
    hovered?: boolean
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        animation = false,
        hovered,
        ...otherProps
    } = props

    const mods = {
        [cls.animation]: animation,
        [cls.hovered]: hovered,
    }

    return (
        <Link
            to={to}
            ref={ref}
            className={classNames(cls.container, mods, [className, cls[theme]])}
            children={children}
            {...otherProps}
        />
    )
})
