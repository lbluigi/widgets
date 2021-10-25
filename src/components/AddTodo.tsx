import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from 'store/todo/todoSlice'

const AddTodo: FC = () => {
	const [inputText, setInputText] = useState<string>('')
	const dispatch = useDispatch()

	const handleAddTodo = (e: SyntheticEvent) => {
		e.preventDefault()

		dispatch(
			addTodo({
				text: inputText,
				id: 'id-1',
				completed: false,
			})
		)
	}

	const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setInputText(e.target.value)
	}

	return (
		<form onSubmit={handleAddTodo} className="space-x-3 flex w-full">
			<input
				type="text"
				onChange={handleChangeText}
				className="border-2 border-gray-800 dark:border-yellow-200 outline-none p-2 bg-transparent flex-1"
				placeholder="Type here..."
			/>

			<button type="submit" className="text-theme-inverse bg-theme p-2">
				Add
			</button>
		</form>
	)
}

export default AddTodo
