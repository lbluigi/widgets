import { FC } from 'react'
import ToggleTheme from './ToggleTheme'

const Header: FC = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-extrabold text-theme">widgets</h1>

				<ToggleTheme />
			</div>

			<div className="my-5 h-1 bg-theme rounded-full animate-long" />
		</>
	)
}

export default Header
