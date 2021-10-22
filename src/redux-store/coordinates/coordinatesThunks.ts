import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'redux-store'
import getCoordinates from 'utils/getPosition'

export const getUserCoordinates = createAsyncThunk<
	any,
	void,
	{
		state: RootState
		rejectValue: string
	}
>('coordinates/getUserCoordinates', async (_, { rejectWithValue }) => {
	try {
		const { latitude, longitude } = await getCoordinates()

		return {
			latitude,
			longitude,
		}
	} catch (err) {
		return rejectWithValue("Can't get the coordinates")
	}
})
