const themesInputs = document.querySelectorAll(
	'.themes__input'
) as NodeListOf<HTMLInputElement>

function toggleClass(theme: string) {
	const body = document.body as HTMLBodyElement
	body.classList.remove('theme-1', 'theme-2', 'theme-3')
	body.classList.add(theme)

	localStorage.setItem('theme', theme)
}

export function toggleTheme() {
	themesInputs.forEach((inputs) => {
		inputs.addEventListener('click', () => {
			const theme = inputs.value
			if (theme) toggleClass(theme)
		})
	})
	
	window.onload = () => {
		const savedTheme = localStorage.getItem('theme') || 'theme-1'
		toggleClass(savedTheme)
	}
}
