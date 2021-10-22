import axios from 'axios'

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

const { WEATHER_API_KEY } = process.env
const baseURL = 'http://api.weatherapi.com/v1'

const weatherAxios = axios.create({
	baseURL,
	headers: {
		'Content-type': 'application/json',
	},
	params: {
		key: WEATHER_API_KEY,
	},
})

const weatherApi = {
	getWeatherByCoordinates: async (latitude: number, longitude: number) => {
		const params = {
			q: `${latitude},${longitude}`,
		}

		return weatherAxios
			.get<WeatherResponse>('/current.json', { params })
			.then((res) => res.data)
	},
}

export default weatherApi
