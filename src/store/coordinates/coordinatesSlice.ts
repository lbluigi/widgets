import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coordinates } from 'utils/getPosition'
import { getUserCoordinates } from './coordinatesThunks'

export interface CoordinatesState {
	loading: boolean
	error: string
	latitude: number | null
	longitude: number | null
}

const initialState: CoordinatesState = {
	loading: false,
	error: '',
	latitude: null,
	longitude: null,
}

export const coordinatesSlice = createSlice({
	name: 'coordinates',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserCoordinates.pending, (state) => {
			state.loading = true
		})

		builder.addCase(
			getUserCoordinates.fulfilled,
			(state, action: PayloadAction<Coordinates>) => {
				const { latitude, longitude } = action.payload

				state.latitude = latitude
				state.longitude = longitude
				state.loading = false
			}
		)

		builder.addCase(getUserCoordinates.rejected, (state, action) => {
			state.loading = false

			if (action.payload) {
				state.error = action.payload
			} else {
				state.error = 'Unexpected error.'
			}
		})
	},
})

export default coordinatesSlice.reducer
