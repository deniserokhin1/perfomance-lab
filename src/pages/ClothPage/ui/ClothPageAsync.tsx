/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

export const ClothPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./ClothPage')), 500)
        })
)
