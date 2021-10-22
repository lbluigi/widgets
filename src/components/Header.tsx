import { FC } from 'react'
import cls from 'utils/classNames'
import ToggleTheme from './ToggleTheme'

const Header: FC = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1
					className={cls([
						'text-2xl',
						'text-gray-800',
						'dark:text-yellow-200',
						'transition',
					])}>
					widgets
				</h1>

				<ToggleTheme />
			</div>

			<div
				className={cls([
					'mt-5',
					'bg-gray-800',
					'dark:bg-yellow-200',
					'h-1',
					'rounded-full',
					'transition',
					'animate-long',
				])}
			/>
		</>
	)
}

export default Header
