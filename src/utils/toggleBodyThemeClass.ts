const toggleBodyThemeClass = (value: string) => {
	const { body } = document
	const themes = ['light', 'dark']

	body.classList.remove(...themes)
	body.classList.add(value)
}

export default toggleBodyThemeClass
