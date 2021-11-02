import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Appointment {
	id: string
	text: string
	date: string
	time: string
}

export interface AppointmentsState {
	[key: string]: Appointment
}

const initialState: AppointmentsState = {}

export const appointmentsSlice = createSlice({
	name: 'appointments',
	initialState,
	reducers: {
		addAppointment: (state, action: PayloadAction<Appointment>) => {
			const { payload } = action
			state[payload.id] = payload
		},

		deleteAppointment: (state, action: PayloadAction<string>) => {
			const { payload } = action
			delete state[payload]
		},
	},
})

export const { addAppointment, deleteAppointment } = appointmentsSlice.actions

export default appointmentsSlice.reducer
