import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { AppLink } from '@/shared/ui/AppLink'

import cls from './NavbarItem.module.scss'
import { AppLinkTheme } from '@/shared/const'
import { INavbarItems } from '../../model/items'

interface NavbarItemProps {
    className?: string
    item: INavbarItems
}

export const NavbarItem = memo((props: NavbarItemProps) => {
    const { item } = props

    const mods = {}

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY_INVERT}
            className={classNames(cls.link, mods)}
            to={item.path}
            animation={true}
            hovered={true}
        >
            <p className={classNames(cls.text)}>{item.text}</p>
        </AppLink>
    )
})
