import Box from 'components/shared/Box'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import AddAppointment from './AddAppointment'
import AppointmentItem from './AppointmentItem'

const AppointmentsBox: FC = () => {
	const appointmentsList = useSelector((state: RootState) => state.appointments)
	const appointments = Object.values(appointmentsList)

	return (
		<Box className="space-y-3">
			<div className="mb-5">
				<h2 className="text-lg font-semibold text-center lg:text-left">
					Appointments
				</h2>

				<AddAppointment />

				{appointments.length <= 0 && (
					<div className="italic">Here you will find your appointments.</div>
				)}
			</div>

			{appointments.map((item) => (
				<AppointmentItem
					key={item.id}
					id={item.id}
					date={item.date}
					time={item.time}
					text={item.text}
				/>
			))}
		</Box>
	)
}

export default AppointmentsBox
