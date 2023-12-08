import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props

    const mods = {}

    return <div className={classNames(cls.container, mods, [className])}></div>
})
