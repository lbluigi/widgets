import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux-store'
import toggleBodyThemeClass from 'utils/toggleBodyThemeClass'

export const setTheme = createAsyncThunk<any, void, { state: RootState }>(
	'theme/setTheme',
	async (_, { getState, rejectWithValue }) => {
		try {
			const { theme } = getState()

			return toggleBodyThemeClass(theme.value)
		} catch (err) {
			return rejectWithValue("Can't set the theme")
		}
	}
)
