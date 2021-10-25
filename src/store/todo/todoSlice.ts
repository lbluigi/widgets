import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
	id: string
	text: string
	completed: boolean
}

export interface TodoState {
	[key: string]: Todo
}

const initialState: TodoState = {}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			const { payload } = action
			state[payload.id] = payload
		},
	},
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
