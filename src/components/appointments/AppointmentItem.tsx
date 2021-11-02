import { FC, memo } from 'react'
import PropTypes from 'prop-types'
import {
	Appointment,
	deleteAppointment,
} from 'store/appointments/appointmentsSlice'
import { XCircleIcon } from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'

interface Props extends Appointment {}

const AppointmentItem: FC<Props> = ({ id, date, text, time }) => {
	const dispatch = useDispatch()

	const handleDeleteAppointment = () => {
		dispatch(deleteAppointment(id))
	}

	return (
		<div className="border-b border-theme py-2 flex items-center justify-between flex-wrap">
			<div>
				<div className="text-xs">
					{date} {time}
				</div>
				<div>{text}</div>
			</div>

			<XCircleIcon
				className="w-6 h-6 block cursor-pointer"
				onClick={handleDeleteAppointment}
				data-cy="delete-appointment-icon"
			/>
		</div>
	)
}

AppointmentItem.propTypes = {
	date: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
}

export default memo(AppointmentItem)
