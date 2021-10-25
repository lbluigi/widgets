import { FC, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux-store'
import { getUserCoordinates } from 'redux-store/coordinates/coordinatesThunks'
import Weather from './Weather'

const WeatherBox: FC = () => {
	const dispatch = useDispatch()

	const { latitude, longitude, loading, error } = useSelector(
		(state: RootState) => state.coordinates
	)

	useEffect(() => {
		dispatch(getUserCoordinates())
	}, [dispatch])

	const renderBox = () => {
		if (loading) {
			return 'Loading...'
		}

		if (error) {
			return error
		}

		if (latitude && longitude) {
			return <Weather />
		}

		return null
	}

	return (
		<div className="p-5 border-4 border-gray-800 dark:border-yellow-200 transition text-theme">
			<h2 className="text-lg font-semibold">Today&apos;s Weather</h2>

			{renderBox()}
		</div>
	)
}

export default memo(WeatherBox)
