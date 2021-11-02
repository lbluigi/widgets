import { FC, memo, ReactNode } from 'react'
import PropTypes from 'prop-types'

type ButtonType = 'button' | 'submit' | 'reset'

interface Props {
	type?: ButtonType
	children: ReactNode
}

const Button: FC<Props> = ({ children, type = 'button' }) => {
	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={type}
			className="text-theme bg-theme-inverse py-3 font-semibold px-5">
			{children}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.oneOf<ButtonType>(['button', 'submit', 'reset']),
}

export default memo(Button)
