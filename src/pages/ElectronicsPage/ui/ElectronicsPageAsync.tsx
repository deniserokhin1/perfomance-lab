/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

export const ElectronicsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./ElectronicsPage')), 1000)
        })
)
