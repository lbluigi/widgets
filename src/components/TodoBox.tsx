import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import AddTodo from './AddTodo'
import Box from './Box'
import TodoItem from './TodoItem'

const TodoBox: FC = () => {
	const todoList = useSelector((state: RootState) => state.todo)
	const todos = Object.values(todoList)

	const todoValues = todos.filter((item) => !item.completed)
	const todoCompletedValues = todos.filter((item) => item.completed)

	const showCompleted = useMemo(
		() => todoCompletedValues.length > 0,
		[todoCompletedValues]
	)

	return (
		<Box className="space-y-3">
			<h2 className="text-lg font-semibold text-center lg:text-left">
				To do list
			</h2>

			<div>
				<AddTodo />
			</div>

			{todoValues.length <= 0 && !showCompleted && (
				<div className="italic">
					Here you will find your to do items once you start adding them with
					the input field above.
				</div>
			)}

			{todoValues.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					text={item.text}
					completed={item.completed}
				/>
			))}

			{todoValues.length > 0 && (
				<div className="italic">
					You can edit a list item. Click on its text and start typing.
				</div>
			)}

			{showCompleted && (
				<div className="border-t border-gray-800 dark:border-yellow-200">
					{todoCompletedValues.map((item) => (
						<TodoItem
							key={item.id}
							id={item.id}
							text={item.text}
							completed={item.completed}
						/>
					))}
				</div>
			)}
		</Box>
	)
}

export default TodoBox
