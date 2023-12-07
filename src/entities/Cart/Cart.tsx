import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './Cart.module.scss'

interface CartProps {
    className?: string
}

export const Cart = memo((props: CartProps) => {
    const { className } = props

    const mods = {}

    return <div className={classNames(cls.container, mods, [className])}></div>
})
