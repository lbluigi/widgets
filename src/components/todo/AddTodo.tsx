import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { addTodo } from 'store/todo/todoSlice'
import Button from 'components/shared/Button'

interface FormData {
	text: string
}

const AddTodo: FC = () => {
	const { handleSubmit, register, reset } = useForm<FormData>()
	const dispatch = useDispatch()

	const handleAddTodo = (data: FormData) => {
		dispatch(
			addTodo({
				text: data.text,
				id: uuidv4(),
				completed: false,
			})
		)

		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(handleAddTodo)}
			className="space-x-3 flex w-full">
			<input
				className="border-2 border-theme outline-none p-2 bg-transparent flex-1 placeholder-blue-900 dark:placeholder-pink-200"
				placeholder="Type here..."
				{...register('text')}
				data-cy="add-todo-input"
			/>

			<Button type="submit">Add item</Button>
		</form>
	)
}

export default memo(AddTodo)
