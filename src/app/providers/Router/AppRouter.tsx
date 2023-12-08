import { AppRoutesProps, routeConfig } from './routeConfig'
import { Route, Routes } from 'react-router-dom'

const renderWithWrapper = (route: AppRoutesProps): JSX.Element => {
    const element = <>{route.element}</>

    return <Route element={element} path={route.path} key={route.path} />
}

export const AppRouter = () => {
    return (
        <div className="pageWrapper">
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </div>
    )
}
