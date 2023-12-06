import { AppRoutes } from '../providers/Router/const/router'

export type RouteFunction<Params extends any[] = any[]> = (...args: Params) => string

export interface RouteParams {
    main: []
    food: []
    cloth: []
    electronics: []
}

export type Routes = {
    [K in AppRoutes]: RouteFunction<RouteParams[K]>
}
