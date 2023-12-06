import { classNames } from '@/shared/lib/classNames'
import cls from './MainPage.module.scss'
import { AppLink } from '@/shared/ui/AppLink'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <section className={classNames(cls.container, mods, [className])}>
            <AppLink to="/food">Еда</AppLink>
            <AppLink to="/cloth">Одежда</AppLink>
            <AppLink to="/electronics">Электроника</AppLink>
        </section>
    )
}

export default MainPage
