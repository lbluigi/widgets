import Header from 'components/Header'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from 'redux-store/theme/themeThunks'

const App: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setTheme())
	}, [dispatch])

	return (
		<div className="container mx-auto py-5 px-5 md:px-0 app transition">
			<Header />
		</div>
	)
}

export default App
