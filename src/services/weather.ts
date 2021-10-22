import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { WEATHER_API_KEY } = process.env
const baseUrl = 'http://api.weatherapi.com/v1'

interface WeatherResponse {
	current: {
		condition: {
			text: string
		}
	}
	location: {
		country: string
		region: string
		name: string
	}
}

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getWeatherByCoordinates: builder.query<WeatherResponse, string>({
			query: (coordinates) =>
				`/current.json?key=${WEATHER_API_KEY}&q=${coordinates}`,
		}),
	}),
})

export const { useGetWeatherByCoordinatesQuery } = weatherApi
