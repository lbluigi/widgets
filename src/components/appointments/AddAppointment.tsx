import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import Button from 'components/shared/Button'
import { addAppointment } from 'store/appointments/appointmentsSlice'

interface FormData {
	date: string
	time: string
	text: string
}

const AddAppointment: FC = () => {
	const { handleSubmit, register, reset, formState } = useForm<FormData>()
	const dispatch = useDispatch()

	const handleAddAppointment = (data: FormData) => {
		dispatch(
			addAppointment({
				text: data.text,
				date: data.date.split('-').reverse().join('-'),
				time: data.time,
				id: uuidv4(),
			})
		)

		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(handleAddAppointment)}
			className="space-y-3 flex flex-col w-full">
			<div className="flex space-x-3">
				<div className="flex-1">
					<input
						type="date"
						className="mb-1 w-full border-2 border-theme outline-none p-2 bg-transparent placeholder-blue-900 dark:placeholder-pink-200"
						{...register('date', {
							required: 'Date is required',
						})}
					/>

					{!!formState.errors.date?.message && (
						<p className="text-red-500">{formState.errors.date?.message}</p>
					)}
				</div>

				<div className="flex-1">
					<input
						type="time"
						className="mb-1 w-full border-2 border-theme outline-none p-2 bg-transparent placeholder-blue-900 dark:placeholder-pink-200"
						{...register('time', {
							required: 'Time is required',
						})}
					/>

					{!!formState.errors.time?.message && (
						<p className="text-red-500">{formState.errors.time?.message}</p>
					)}
				</div>
			</div>

			<div className="flex-1">
				<input
					className="mb-1 w-full border-2 border-theme outline-none p-2 bg-transparent placeholder-blue-900 dark:placeholder-pink-200"
					placeholder="Add appointment text..."
					{...register('text', {
						required: 'Appointment details are required',
					})}
				/>

				{!!formState.errors.text?.message && (
					<p className="text-red-500">{formState.errors.text?.message}</p>
				)}
			</div>

			<Button type="submit">Add appointment</Button>
		</form>
	)
}

export default memo(AddAppointment)
