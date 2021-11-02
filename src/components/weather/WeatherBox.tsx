import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { getUserCoordinates } from 'store/coordinates/coordinatesThunks'
import Box from '../shared/Box'
import Weather from './Weather'

const WeatherBox: FC = () => {
	const dispatch = useDispatch()

	const { latitude, longitude, loading, error } = useSelector(
		(state: RootState) => state.coordinates
	)

	useEffect(() => {
		dispatch(getUserCoordinates())
	}, [dispatch])

	const renderContent = () => {
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
		<Box className="h-full text-center lg:text-left">
			<h2 className="text-lg font-semibold">Today&apos;s Weather</h2>
			{renderContent()}
		</Box>
	)
}

export default WeatherBox
