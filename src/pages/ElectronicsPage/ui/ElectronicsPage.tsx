import { classNames } from '@/shared/lib/classNames'
import cls from './ElectronicsPage.module.scss'

interface ElectronicsPageProps {
    className?: string
}

const ElectronicsPage = (props: ElectronicsPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <h2>Electronics</h2>
        </div>
    )
}

export default ElectronicsPage
