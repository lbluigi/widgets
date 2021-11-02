import { FC, useEffect, useState } from 'react'
import { ClockIcon } from '@heroicons/react/outline'
import Box from './Box'

const formatDateWithTwoDigits = (date: number) => `0${date}`.slice(-2)

const ClockBox: FC = () => {
	const [date, setDate] = useState<Date>(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 60000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<Box className="h-full text-center lg:text-left">
			<div className="space-x-3 flex items-center flex-wrap h-full">
				<div className="w-full lg:w-auto">
					<ClockIcon className="h-10 w-10 text-theme-inverse mx-auto lg:mx-0 animate-clock" />
				</div>

				<div className="w-full lg:w-auto">
					<div className="text-lg font-semibold">
						{date.toLocaleString('en-us', {
							day: 'numeric',
							weekday: 'long',
							month: 'long',
							year: 'numeric',
						})}
					</div>

					<div className="text-4xl font-extrabold">
						{formatDateWithTwoDigits(date.getHours())}:
						{formatDateWithTwoDigits(date.getMinutes())}
					</div>
				</div>
			</div>
		</Box>
	)
}

export default ClockBox
