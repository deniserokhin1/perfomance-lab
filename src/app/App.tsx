import { Navbar } from '@/widgets/Navbar'
import { AppRouter } from './providers/Router/AppRouter'
import { ProductCart } from '@/features/ProductCart'
import { useDetectDevice } from '@/shared/hooks/useDetectDevice'
import { MobilePage } from '@/pages/MobilePage'

export const App = () => {
    const isMobile = useDetectDevice()

    return (
        <>
            {isMobile ? (
                <MobilePage />
            ) : (
                <div className="main">
                    <Navbar />
                    <ProductCart />
                    <main className="content">
                        <AppRouter />
                    </main>
                </div>
            )}
        </>
    )
}
