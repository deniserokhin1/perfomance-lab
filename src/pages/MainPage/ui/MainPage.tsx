import { classNames } from '@/shared/lib/classNames'
import cls from './MainPage.module.scss'
import { Text } from '@/shared/ui/Text'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <section className={classNames(cls.container, mods, [className])}>
            <Text title="Главная страница" />
        </section>
    )
}

export default MainPage
