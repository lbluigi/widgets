import { FC } from 'react'
import ToggleTheme from './ToggleTheme'

const Header: FC = () => {
	return (
		<header>
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-extrabold text-theme-inverse bg-theme py-3 px-5 solid-shadow border-theme">
					widgets
				</h1>

				<ToggleTheme />
			</div>

			<div className="mt-5 h-1 bg-theme animate-long" />
		</header>
	)
}

export default Header
