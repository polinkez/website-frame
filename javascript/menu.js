document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button')

  if (!menuButton) return

  if (document.body.classList.contains('is-home')) return

  menuButton.addEventListener('click', function () {
    document.body.classList.toggle('menu-open')
  })
})
