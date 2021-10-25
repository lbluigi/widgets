import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { WEATHER_API_KEY } = process.env
const baseUrl = 'http://api.weatherapi.com/v1'

interface WeatherResponse {
	current: {
		condition: {
			text: string
			icon: string
		}
	}
	location: {
		country: string
		region: string
		name: string
	}
}

interface WeatherState {
	text: string
	icon: string
	country: string
	region: string
	name: string
}

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getWeatherByCoordinates: builder.query<WeatherState, string>({
			query: (coordinates) =>
				`/current.json?key=${WEATHER_API_KEY}&q=${coordinates}`,
			transformResponse: (response: WeatherResponse) => {
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
