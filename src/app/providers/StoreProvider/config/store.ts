import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { $api } from '@/shared/api/api'
import { productListReducer } from '@/features/ProductInfinityList'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer: ReducersMapObject<StateSchema> = {
    productList: productListReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
})

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
