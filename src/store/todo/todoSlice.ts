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

		deleteTodo: (state, action: PayloadAction<string>) => {
			const { payload } = action
			delete state[payload]
		},

		toggleCompleteTodo: (state, action: PayloadAction<string>) => {
			const { payload } = action
			state[payload].completed = !state[payload].completed
		},

		editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
			const { payload } = action

			state[payload.id] = {
				...state[payload.id],
				text: payload.text,
			}
		},
	},
})

export const { addTodo, deleteTodo, toggleCompleteTodo, editTodo } =
	todoSlice.actions

export default todoSlice.reducer
