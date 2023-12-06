import cls from './FoodPage.module.scss'
import type { FC } from 'react'
import { classNames } from '@/shared/lib/classNames'

interface FoodPageProps {
    className?: string
}

const FoodPage: FC<FoodPageProps> = (props) => {
    const { className } = props
    const mods = {}

    return (
        <section className={classNames(cls.container, mods, [className])}>
            <h2>Food</h2>
        </section>
    )
}

export default FoodPage
