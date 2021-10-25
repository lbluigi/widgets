import { FC } from 'react'
import AddTodo from './AddTodo'
import Box from './Box'

const TodoBox: FC = () => {
	return (
		<Box>
			<h2 className="text-lg font-semibold text-center lg:text-left">
				To do list
			</h2>

			<AddTodo />
		</Box>
	)
}

export default TodoBox
