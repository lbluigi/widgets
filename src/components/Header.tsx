import { FC } from 'react'
import ToggleTheme from './ToggleTheme'

const Header: FC = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-extrabold text-gray-800 dark:text-yellow-200 transition">
					widgets
				</h1>

				<ToggleTheme />
			</div>

			<div className="my-5 bg-gray-800 dark:bg-yellow-200 h-1 rounded-full transition animate-long" />
		</>
	)
}

export default Header
