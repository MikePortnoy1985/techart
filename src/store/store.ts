import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

export const store = configureStore({
   reducer: {
      root: rootReducer.reducer,
   },
   middleware: getDefaultMiddleware(),
})

export type AppType = ReturnType<typeof store.getState>
