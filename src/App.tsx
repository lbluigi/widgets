import AppointmentsBox from 'components/appointments/AppointmentsBox'
import ClockBox from 'components/shared/ClockBox'
import Header from 'components/shared/Header'
import TodoBox from 'components/todo/TodoBox'
import WeatherBox from 'components/weather/WeatherBox'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from 'store/theme/themeThunks'

const App: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setTheme())
	}, [dispatch])

	return (
		<div className="container mx-auto py-5 space-y-10 px-5 md:px-0 app transition">
			<Header />

			<div className="flex flex-wrap space-y-10 lg:space-y-0 lg:space-x-10">
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

			<div className="w-full">
				<AppointmentsBox />
			</div>
		</div>
	)
}

export default App
