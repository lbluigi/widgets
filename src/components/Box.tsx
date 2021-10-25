import { FC } from 'react'
import * as PropTypes from 'prop-types'

interface Props {
	className?: string
}

const Box: FC<Props> = ({ children, className = '' }) => {
	const classes =
		'p-5 border-4 border-gray-800 dark:border-yellow-200 transition text-theme'

	return <div className={`${classes} ${className}`}>{children}</div>
}

Box.propTypes = {
	className: PropTypes.string,
}

export default Box
