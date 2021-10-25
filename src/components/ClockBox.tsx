import { FC, useEffect, useState } from 'react'
import { ClockIcon } from '@heroicons/react/outline'
import Box from './Box'

const ClockBox: FC = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 60000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<Box className="h-full">
			<div className="space-x-3 flex items-center flex-wrap h-full">
				<div className="w-full lg:w-auto">
					<ClockIcon className="h-10 w-10 text-theme mx-auto lg:mx-0 animate-clock" />
				</div>

				<div className="w-full lg:w-auto">
					<div>
						{date.toLocaleString('en-us', {
							day: 'numeric',
							weekday: 'long',
							month: 'long',
							year: 'numeric',
						})}
					</div>

					<div className="text-4xl font-extrabold">
						{date.getHours()}:{`0${date.getMinutes()}`.slice(-2)}
					</div>
				</div>
			</div>
		</Box>
	)
}

export default ClockBox
