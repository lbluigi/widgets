const toggleBodyThemeClass = (value: string): void => {
	const { body } = document
	const themes = ['light', 'dark']

	body.classList.remove(...themes)
	body.classList.add(value)
}

export default toggleBodyThemeClass
