import { routePath } from '@/shared/const/router'

export interface INavbarItems {
    path: string
    text: string
}

export const navbarItemsList: INavbarItems[] = [
    {
        path: routePath.food(),
        text: 'Еда',
    },
    {
        path: routePath.cloth(),
        text: 'Одежда',
    },
    {
        path: routePath.electronics(),
        text: 'Электроника',
    },
]
