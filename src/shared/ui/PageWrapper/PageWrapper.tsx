import { ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './PageWrapper.module.scss'

interface PageWrapperProps {
    className?: string
    children?: ReactNode
}

export const PageWrapper = (props: PageWrapperProps) => {
    const { className, children } = props

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {children}
            <div className={cls.footer} />
        </div>
    )
}
