import { memo, useCallback } from 'react'

import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import Cart from '@/shared/assets/cart.svg?react'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'

import { cartActions } from '../../model/slices/cartSlice'
import cls from './CartToggle.module.scss'
import { getCartProducts } from '../../model/selectors/getCart'
import { classNames } from '@/shared/lib/classNames'

export const CartToggle = memo(() => {
    const dispatch = useAppDispatch()

    const products = useAppSelector(getCartProducts)

    const { toggleCart } = cartActions

    const onToggleCart = useCallback(() => {
        dispatch(toggleCart())
    }, [dispatch, toggleCart])

    const mods = {
        [cls.dote]: !!products.length,
    }

    return (
        <Button onClick={onToggleCart} className={classNames(cls.container)}>
            <div className={classNames('', mods)} />
            <Icon Svg={Cart} />
        </Button>
    )
})
