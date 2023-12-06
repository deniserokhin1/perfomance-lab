import { Navbar } from '@/widgets/Navbar'
import { AppRouter } from './providers/Router/AppRouter'

export const App = () => {
    return (
        <div className="main">
            <Navbar />

            <main className="content">
                <AppRouter />
            </main>
        </div>
    )
}
