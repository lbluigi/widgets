import { FC } from 'react'
import * as PropTypes from 'prop-types'

interface Props {
	className?: string
}

const Box: FC<Props> = ({ children, className = '' }) => {
	const classes =
		'p-5 transition bg-theme text-theme-inverse dark:bg-theme-inverse solid-shadow border-theme'

	return <div className={`${classes} ${className}`}>{children}</div>
}

Box.propTypes = {
	className: PropTypes.string,
}

export default Box
