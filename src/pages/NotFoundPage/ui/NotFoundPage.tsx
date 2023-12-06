import { classNames } from '@/shared/lib/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <section className={classNames(cls.container, mods, [className])}>
            <h2>Страница не найдена</h2>
        </section>
    )
}

export default NotFoundPage
