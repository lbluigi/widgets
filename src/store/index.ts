import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { combineReducers } from 'redux'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Persistor } from 'redux-persist/es/types'
import { weatherApi } from 'services/weather'
import themeReducer from './theme/themeSlice'
import todoReducer from './todo/todoSlice'
import coordinatesReducer from './coordinates/coordinatesSlice'

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: ['coordinates', 'weatherApi'],
}

const rootReducer = combineReducers({
	theme: themeReducer,
	coordinates: coordinatesReducer,
	todo: todoReducer,
	[weatherApi.reducerPath]: weatherApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions,
			},
		}).concat(weatherApi.middleware),
})

setupListeners(store.dispatch)

export const persistor: Persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
