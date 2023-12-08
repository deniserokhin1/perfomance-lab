import { useLayoutEffect, useState } from 'react'

export const useDetectDevice = (): boolean => {
    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        const handleResize = (): void =>
            setIsMobile(window.matchMedia('(pointer:coarse)').matches)

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
}
