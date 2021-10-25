import ClockBox from 'components/ClockBox'
import Header from 'components/Header'
import TodoBox from 'components/TodoBox'
import WeatherBox from 'components/WeatherBox'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from 'store/theme/themeThunks'

const App: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setTheme())
	}, [dispatch])

	return (
		<div className="container mx-auto py-5 space-y-5 px-5 md:px-0 app transition">
			<Header />

			<div className="flex flex-wrap space-y-5 lg:space-y-0 lg:space-x-5">
				<div className="w-full lg:flex-1">
					<WeatherBox />
				</div>

				<div className="w-full lg:flex-1">
					<ClockBox />
				</div>
			</div>

			<div className="w-full">
				<TodoBox />
			</div>
		</div>
	)
}

export default App
