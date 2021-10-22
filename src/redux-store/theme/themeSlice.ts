import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark'

export interface ThemeState {
	value: Theme
}

const initialState: ThemeState = {
	value: 'light',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state, action: PayloadAction<Theme>) => {
			const { payload } = action
			state.value = payload
		},
	},
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
