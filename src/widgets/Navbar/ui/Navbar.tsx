import { classNames } from '@/shared/lib/classNames'
import cls from './Navbar.module.scss'
import { navbarItemsList } from '../model/items'
import { NavbarItem } from './NavbarItem/NavbarItem'

export const Navbar = () => {

    return (
        <header className={classNames(cls.container)}>
            <ul className={cls.wrapper}>
                {navbarItemsList.map((i, id) => (
                    <li key={id}>
                        <NavbarItem item={i} />
                    </li>
                ))}
            </ul>
        </header>
    )
}
