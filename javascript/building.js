buildingScroll()

function buildingScroll() {
  let gallery = document.querySelector('.building-gallery')
  let track = document.querySelector('.building-track')

  if (!gallery || !track) return

  window.addEventListener('scroll', () => {
    let rect = gallery.getBoundingClientRect()
    let progress =
      (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

    if (progress < 0) {
      progress = 0
    }

    if (progress > 1) {
      progress = 1
    }

    let move = progress * 115

    track.style.transform = 'translateX(-' + move + 'vw)'
  })
}

buildingParallax()

function buildingParallax() {
  let container = document.querySelector('.parallax-container')
  let image = document.querySelector('.parallax-image')

  if (!container || !image) return

  window.addEventListener('scroll', () => {
    let rect = container.getBoundingClientRect()

    let speed = rect.top * -0.08

    image.style.transform = 'translateY(' + speed + 'px)'
  })
}

let currentFloor = 1

floorChange()
floorPreview()

function floorChange() {
  let floorImage = document.querySelector('.floor-image')
  let floorNumber = document.querySelector('.floor-number')
  let floorUp = document.querySelector('.floor-up')
  let floorDown = document.querySelector('.floor-down')

  if (!floorImage || !floorNumber || !floorUp || !floorDown) return

  floorUp.addEventListener('click', () => {
    currentFloor = 2

    floorImage.src = './images/floor2.svg'
    floorNumber.innerText = '2'

    document.body.classList.add('floor-two')
  })

  floorDown.addEventListener('click', () => {
    currentFloor = 1

    floorImage.src = './images/floor1.svg'
    floorNumber.innerText = '1'

    document.body.classList.remove('floor-two')
  })
}

function floorPreview() {
  let preview = document.querySelector('.floor-preview')
  let previewImage = document.querySelector('.floor-preview img')

  if (!preview || !previewImage) return

  addPreview('.floor1-merch', './images/floor1-merch.png')
  addPreview('.floor1-relax', './images/floor1-relax.png')
  addPreview('.floor1-wc', './images/floor1-wc.png')

  addPreview('.floor2-speakers', './images/floor2-speakers.png')
  addPreview('.floor2-vinyl', './images/floor2-vinyl.png')
  addPreview('.floor2-media', './images/floor2-media.png')
  addPreview('.floor2-library', './images/floor2-library.png')
  addPreview('.floor2-entrance', './images/floor2-entrance.png')

  function addPreview(selector, imagePath) {
    let zone = document.querySelector(selector)

    if (!zone) return

    zone.addEventListener('mouseenter', () => {
      previewImage.src = imagePath
      preview.classList.add('visible')
    })

    zone.addEventListener('mouseleave', () => {
      preview.classList.remove('visible')
    })

    zone.addEventListener('mousemove', (event) => {
      preview.style.left = event.clientX - 140 + 'px'
      preview.style.top = event.clientY - 140 + 'px'
    })
  }
}
