import { memo, useCallback, useMemo } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { Cart } from '@/entities/Cart'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider'
import { getCurrentPriceFormated, getCurrentPriceNumber } from '@/shared/lib/getPrice'

import cls from './ProductCart.module.scss'
import { getCartIsOpen, getCartProducts } from '../../model/selectors/getCart'
import { cartActions } from '../../model/slices/cartSlice'

export const ProductCart = memo(() => {
    const dispatch = useAppDispatch()
    const cartIsOpen = useAppSelector(getCartIsOpen)
    const products = useAppSelector(getCartProducts)

    const { toggleCart, deleteProduct } = cartActions

    const totalSum = useMemo(() => {
        const result = products.reduce(
            (acc, i) => acc + getCurrentPriceNumber(i.price, i.discount) * i.amount,
            0
        )
        const resultString = `Общая сумма: ${getCurrentPriceFormated(result)} ₽`
        return resultString
    }, [products])

    const onToggleCart = () => dispatch(toggleCart())

    const onDeleteCartItem = useCallback(
        (id: number) => () => dispatch(deleteProduct(id)),
        [deleteProduct, dispatch]
    )

    const mods = {
        [cls.showOverlay]: cartIsOpen,
    }

    return (
        <>
            <div className={classNames(cls.overlay, mods)} onClick={onToggleCart} />
            <Cart
                products={products}
                isOpen={cartIsOpen}
                totalSum={totalSum}
                onDeleteCartItem={onDeleteCartItem}
            />
        </>
    )
})
