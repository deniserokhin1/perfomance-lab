import { PageLoader } from '@/widgets/PageLoader'
import { AppRoutesProps, routeConfig } from './routeConfig'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const renderWithWrapper = (route: AppRoutesProps): JSX.Element => {
    const element = <>{route.element}</>

    return <Route element={element} path={route.path} key={route.path} />
}

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="pageWrapper">
                <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
            </div>
        </Suspense>
    )
}
