import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { toggleTheme } from 'store/theme/themeSlice'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { useMemo } from 'react'
import toggleBodyThemeClass from 'utils/toggleBodyThemeClass'

const ToggleTheme = () => {
	const theme = useSelector((state: RootState) => state.theme.value)
	const dispatch = useDispatch()
	const isLight = useMemo(() => theme === 'light', [theme])

	const onClick = () => {
		const newTheme = isLight ? 'dark' : 'light'

		dispatch(toggleTheme(newTheme))

		toggleBodyThemeClass(newTheme)
	}

	return (
		<button
			onClick={onClick}
			type="button"
			className="rounded-full p-3 shadow bg-theme">
			{isLight ? (
				<SunIcon className="h-5 w-5 text-yellow-200" />
			) : (
				<MoonIcon className="h-5 w-5 text-gray-800" />
			)}
		</button>
	)
}

export default ToggleTheme
