let trailImages = [
  './images/building-1.png',
  './images/event-1.png',
  './images/building-2.png',
  './images/event-2.png',
  './images/building-3.png',
  './images/event-3.png',
  './images/building-4.png',
  './images/event-4.png',
  './images/building-5.png',
  './images/event-5.png'
]

let currentTrailImage = 0
let lastX = 0
let lastY = 0

photoTrail()

function photoTrail() {
  let screen = document.querySelector('.home-screen')
  let trail = document.querySelector('.photo-trail')

  if (!screen || !trail) return

  screen.addEventListener('mousemove', (event) => {
    let distanceX = event.clientX - lastX
    let distanceY = event.clientY - lastY
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    if (distance < 110) return

    lastX = event.clientX
    lastY = event.clientY

    let image = document.createElement('img')
    image.classList.add('trail-image')

    image.src = trailImages[currentTrailImage]

    image.style.left = event.clientX + 'px'
    image.style.top = event.clientY + 'px'

    trail.appendChild(image)

    currentTrailImage += 1

    if (currentTrailImage >= trailImages.length) {
      currentTrailImage = 0
    }

    setTimeout(() => {
      image.remove()
    }, 1100)
  })
}
