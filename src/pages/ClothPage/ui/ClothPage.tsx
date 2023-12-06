import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './ClothPage.module.scss'

interface ClothPageProps {
    className?: string
}

const ClothPage = memo((props: ClothPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <h2>Cloth</h2>
        </div>
    )
})

export default ClothPage
