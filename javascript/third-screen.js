let posters = [
  './images/3s-class.png',
  './images/3s-tutorial.png',
  './images/3s-workshop.png'
]

eventsScroll()

function eventsScroll() {
  let eventsScreen = document.querySelector('.events-screen')
  let eventRows = document.querySelectorAll('.event-row')
  let poster = document.querySelector('.events-poster')

  if (!eventsScreen || !eventRows.length || !poster) return

  window.addEventListener('scroll', () => {
    let screenTop = eventsScreen.getBoundingClientRect().top
    let scrollDistance = -screenTop

    let activeIndex = 0

    if (scrollDistance > window.innerHeight * 0.06) {
      activeIndex = 1
    }

    if (scrollDistance > window.innerHeight * 0.12) {
      activeIndex = 2
    }

    eventRows.forEach((row) => {
      row.classList.remove('active')
    })

    eventRows[activeIndex].classList.add('active')
    poster.src = posters[activeIndex]

    if (scrollDistance > window.innerHeight * 0) {
      poster.classList.add('show')
    } else {
      poster.classList.remove('show')
    }
  })
}
