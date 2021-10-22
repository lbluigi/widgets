export interface Coordinates {
	latitude: number
	longitude: number
}

interface Position {
	coords: Coordinates
}

const getCoordinates = async (): Promise<Coordinates> => {
	const position: Position = await new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition(resolve, reject)
	)

	return {
		latitude: position.coords.latitude,
		longitude: position.coords.longitude,
	}
}

export default getCoordinates
