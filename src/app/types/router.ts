import { AppRoutes } from '@/shared/const/router'

export type RouteFunction<Params extends any[] = any[]> = (...args: Params) => string

export interface RouteParams {
    main: []
    food: []
    cloth: []
    electronics: []
    not_found: []
}

export type Routes = {
    [K in AppRoutes]: RouteFunction<RouteParams[K]>
}
