eventPopup()

function eventPopup() {
  let circles = document.querySelectorAll('.event-circle')
  let popup = document.querySelector('.event-popup')
  let close = document.querySelector('.event-close')

  if (!circles.length || !popup || !close) return

  circles.forEach((circle) => {
    circle.addEventListener('click', () => {
      popup.classList.add('active')
    })
  })

  close.addEventListener('click', () => {
    popup.classList.remove('active')
  })

  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove('active')
    }
  })
}
