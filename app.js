let lastScrollTop = 0
const header = document.getElementById('header')
const scrollThreshold = 120 // Порог, после которого скрывать хэдер

window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop

	if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
		// Скроллим вниз и прошли порог — скрыть хэдер
		header.classList.add('hide')
	} else {
		// Скроллим вверх или ещё не достигли порога — показать хэдер
		header.classList.remove('hide')
	}

	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // Для Safari
})
