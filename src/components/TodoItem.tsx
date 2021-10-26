import { ChangeEvent, FC, memo } from 'react'
import * as PropTypes from 'prop-types'
import { XCircleIcon } from '@heroicons/react/outline'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleCompleteTodo } from 'store/todo/todoSlice'

interface Props {
	id: string
	text: string
	completed: boolean
}

const TodoItem: FC<Props> = ({ id, text, completed }) => {
	const dispatch = useDispatch()

	const handleDeleteTodo = () => {
		dispatch(deleteTodo(id))
	}

	const handleToggleCompleteTodo = () => {
		dispatch(toggleCompleteTodo(id))
	}

	const handleChangeTodo = debounce((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			editTodo({
				id,
				text: e.target.value,
			})
		)
	}, 1000)

	return (
		<div className="flex items-center justify-between my-3 text-xl">
			<div className="flex items-center flex-1 space-x-2">
				<input
					type="checkbox"
					className="appearance-none w-4 h-4 border border-gray-800 dark:border-yellow-200 checked:bg-gray-800 dark:checked:bg-yellow-200 transition cursor-pointer"
					checked={completed}
					onChange={handleToggleCompleteTodo}
				/>

				<input
					defaultValue={text}
					onChange={handleChangeTodo}
					disabled={completed}
					className={[
						completed ? 'line-through' : '',
						'bg-transparent outline-none w-full',
					].join(' ')}
				/>
			</div>

			<XCircleIcon
				className="w-6 h-6 block cursor-pointer"
				onClick={handleDeleteTodo}
			/>
		</div>
	)
}

TodoItem.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
}

export default memo(TodoItem)
