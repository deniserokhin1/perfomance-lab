import { type RouteObject, type RouteProps } from 'react-router-dom'

import { FoodPage } from '@/pages/FoodPage'
import { MainPage } from '@/pages/MainPage'
import { ElectronicsPage } from '@/pages/ElectronicsPage'
import { ClothPage } from '@/pages/ClothPage'
import { AppRoutes, routePath } from '@/shared/const/router'
import { NotFoundPage } from '@/pages/NotFoundPage'

export type AppRoutesProps = RouteProps & RouteObject

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    main: {
        path: routePath.main(),
        element: <MainPage />,
    },
    food: {
        path: routePath.food(),
        element: <FoodPage />,
    },
    cloth: {
        path: routePath.cloth(),
        element: <ClothPage />,
    },
    electronics: {
        path: routePath.electronics(),
        element: <ElectronicsPage />,
    },
    not_found: {
        path: routePath.not_found(),
        element: <NotFoundPage />,
    },
}
