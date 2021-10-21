import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux-store'
import { toggleTheme } from 'redux-store/theme/themeSlice'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { useMemo } from 'react'

const ToggleTheme = () => {
	const theme = useSelector((state: RootState) => state.theme.value)
	const dispatch = useDispatch()
	const isLight = useMemo(() => theme === 'light', [theme])

	const onClick = () => {
		dispatch(toggleTheme(isLight ? 'dark' : 'light'))
	}

	return (
		<button
			onClick={onClick}
			type="button"
			// eslint-disable-next-line max-len
			className="transition rounded-full p-3 shadow bg-gray-800 dark:bg-yellow-200">
			{isLight ? (
				<SunIcon className="h-5 w-5 text-yellow-200" />
			) : (
				<MoonIcon className="h-5 w-5 text-gray-800" />
			)}
		</button>
	)
}

export default ToggleTheme
