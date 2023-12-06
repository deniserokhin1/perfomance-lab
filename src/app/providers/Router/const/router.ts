import { Routes } from '@/app/types/router'

export type AppRoutes = 'main' | 'food' | 'cloth' | 'electronics'

export const routePath: Routes = {
    main: () => '/',
    food: () => '/food',
    cloth: () => 'cloth',
    electronics: () => 'electronics'
}
