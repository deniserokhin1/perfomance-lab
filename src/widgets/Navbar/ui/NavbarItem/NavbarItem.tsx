import { memo, useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { AppLink } from '@/shared/ui/AppLink'

import cls from './NavbarItem.module.scss'
import { AppLinkTheme } from '@/shared/const'
import { INavbarItems } from '../../model/items'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'
import { getProductListIsLoading } from '@/features/ProductInfinityList'
import { productListActions } from '@/features/ProductInfinityList/model/slice/productListSlice'

interface NavbarItemProps {
    className?: string
    item: INavbarItems
}

export const NavbarItem = memo((props: NavbarItemProps) => {
    const { item } = props

    const isLoading = useAppSelector(getProductListIsLoading)

    const mods = {
        [cls.isLoading]: isLoading,
    }

    return (
        <li>
            <AppLink
                theme={AppLinkTheme.PRIMARY_INVERT}
                className={classNames('', mods)}
                to={item.path}
                animation={true}
                hovered={true}
            >
                <p className={classNames(cls.text)}>{item.text}</p>
            </AppLink>
        </li>
    )
})
