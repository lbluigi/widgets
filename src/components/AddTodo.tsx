import {
	FC,
	memo,
	useState,
	useCallback,
	ChangeEvent,
	SyntheticEvent,
} from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from 'store/todo/todoSlice'

const AddTodo: FC = () => {
	const [inputText, setInputText] = useState<string>('')
	const dispatch = useDispatch()

	const handleAddTodo = (e: SyntheticEvent) => {
		e.preventDefault()

		dispatch(
			addTodo({
				text: inputText,
				id: uuidv4(),
				completed: false,
			})
		)

		setInputText('')
	}

	const handleChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setInputText(e.target.value)
	}, [])

	return (
		<form onSubmit={handleAddTodo} className="space-x-3 flex w-full">
			<input
				type="text"
				onChange={handleChangeText}
				className="border-2 border-gray-800 dark:border-yellow-200 outline-none p-2 bg-transparent flex-1 placeholder-gray-800 dark:placeholder-yellow-200"
				placeholder="Type here..."
				value={inputText}
			/>

			<button type="submit" className="text-theme-inverse bg-theme px-5">
				Add item
			</button>
		</form>
	)
}

export default memo(AddTodo)
