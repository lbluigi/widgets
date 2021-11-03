import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const { WEATHER_API_KEY } = process.env
const baseUrl = 'http://api.weatherapi.com/v1'

interface Condition {
	text: string
	icon: string
}

interface Location {
	country: string
	region: string
	name: string
}

interface WeatherApiResponse {
	current: {
		condition: Condition
	}
	location: Location
}

type WeatherApiState = Condition & Location

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getWeatherByCoordinates: builder.query<WeatherApiState, string>({
			query: (coordinates) =>
				`/current.json?key=${WEATHER_API_KEY}&q=${coordinates}`,

			transformResponse: (response: WeatherApiResponse) => {
				return {
					text: response?.current?.condition?.text,
					icon: response?.current?.condition?.icon,
					country: response?.location?.country,
					region: response?.location?.region,
					name: response?.location?.name,
				}
			},
		}),
	}),
})

export const { useGetWeatherByCoordinatesQuery } = weatherApi
