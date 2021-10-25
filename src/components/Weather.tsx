import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useGetWeatherByCoordinatesQuery } from 'services/weather'

const Weather: FC = () => {
	const { latitude, longitude } = useSelector(
		(state: RootState) => state.coordinates
	)

	const { data, error, isLoading } = useGetWeatherByCoordinatesQuery(
		`${latitude},${longitude}`
	)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>{JSON.stringify(error)}</div>
	}

	return (
		<div className="space-x-3 flex items-center flex-wrap">
			<div className="w-full lg:w-auto">
				<img
					src={data?.icon}
					alt={data?.text}
					className="w-10 h-10 mx-auto lg:mx-0"
				/>
			</div>

			<div className="w-full lg:w-auto">
				<div>
					<span className="font-semibold">Condition: </span>
					<span>{data?.text}</span>
				</div>

				<div>
					<span className="font-semibold">City: </span>
					<span>
						{data?.name}, {data?.region}, {data?.country}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Weather
