errorMonkey()

function errorMonkey() {
  let code = document.querySelector('.error-code')
  let monkey = document.querySelector('.error-monkey')

  if (!code || !monkey) return

  code.addEventListener('mouseenter', () => {
    monkey.classList.add('visible')
  })

  code.addEventListener('mouseleave', () => {
    monkey.classList.remove('visible')
  })

  code.addEventListener('mousemove', (event) => {
    monkey.style.left = event.clientX + 25 + 'px'
    monkey.style.top = event.clientY - 160 + 'px'
  })
}
