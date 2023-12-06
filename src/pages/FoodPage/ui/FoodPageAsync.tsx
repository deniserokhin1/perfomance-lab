/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

export const FoodPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./FoodPage')), 500)
        })
)
