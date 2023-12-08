import { classNames } from '@/shared/lib/classNames'
import cls from './NotFoundPage.module.scss'
import { Text } from '@/shared/ui/Text'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <section className={classNames(cls.container, mods, [className])}>
            <Text title="Страница не найдена" />
        </section>
    )
}

export default NotFoundPage
