import { Routes } from '@/app/types/router'

export type AppRoutes = 'main' | 'food' | 'cloth' | 'electronics' | 'not_found'

export const routePath: Routes = {
    main: () => '/',
    food: () => 'food',
    cloth: () => 'cloth',
    electronics: () => 'electronics',
    not_found: () => '*',
}
