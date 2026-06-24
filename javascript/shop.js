marketChange()

function marketChange() {
  let buttons = document.querySelectorAll('.market-button')

  let image = document.querySelector('.market-product-image')
  let title = document.querySelector('.market-title')
  let price = document.querySelector('.market-price')

  if (!buttons.length || !image || !title || !price) return

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => {
        item.classList.remove('active')
      })

      button.classList.add('active')

      if (button.classList.contains('market-lamp')) {
        title.innerHTML = `
          <span class="market-title-bold">УМНАЯ ЛАМПА</span>
          <span>НАКАЛИВАНИЯ FB800</span>
        `

        image.src = './images/market-lamp.png'
        price.innerText = '1 800 ₽'
      }

      if (button.classList.contains('market-notebook')) {
        title.innerHTML = `
          <span class="market-title-bold">ПОЛЕВОЙ БЛОКНОТ</span>
          <span>ДЛЯ ЗВУКОВЫХ ЗАМЕТОК</span>
        `

        image.src = './images/market-notebook.png'
        price.innerText = '900 ₽'
      }

      if (button.classList.contains('market-mask')) {
        title.innerHTML = `
          <span class="market-title-bold">МАСКА ДЛЯ СНА</span>
          <span>ТИШИНА 2.0</span>
        `

        image.src = './images/market-mask.png'
        price.innerText = '1 200 ₽'
      }

      if (button.classList.contains('market-hoodie')) {
        title.innerHTML = `
          <span class="market-title-bold">ХУДИ</span>
          <span>FRAME BUREAU</span>
        `

        image.src = './images/market-hoodie.png'
        price.innerText = '4 900 ₽'
      }
    })
  })
}
