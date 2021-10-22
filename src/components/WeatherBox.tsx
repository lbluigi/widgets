import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux-store'
import { getUserCoordinates } from 'redux-store/coordinates/coordinatesThunks'

const WeatherBox: FC = () => {
	const dispatch = useDispatch()

	const { latitude, longitude, loading, error } = useSelector(
		(state: RootState) => state.coordinates
	)

	useEffect(() => {
		dispatch(getUserCoordinates())
	}, [dispatch])

	return (
		<div className="p-5 border-4 border-gray-800 dark:border-yellow-200  transition">
			<h2 className="text-lg font-semibold text-gray-800 dark:text-yellow-200 transition">
				Today&apos;s Weather
			</h2>

			{loading && <div>Loading...</div>}

			{error && <div>{error}</div>}

			{latitude && longitude && (
				<div>
					<p>Latitude: {latitude}</p>
					<p>Longitude: {longitude}</p>
				</div>
			)}
		</div>
	)
}

export default WeatherBox
