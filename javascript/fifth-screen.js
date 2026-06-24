ticketForm()

function ticketForm() {
  let form = document.querySelector('.ticket-form')
  let userName = document.querySelector('input[name="userName"]')
  let email = document.querySelector('input[name="email"]')

  let button = document.querySelector('.ticket-submit')
  let popup = document.querySelector('.ticket-popup')

  let dates = document.querySelectorAll('.ticket-dates button')
  let times = document.querySelectorAll('.ticket-times button')

  if (!form) return

  dates.forEach((date) => {
    date.addEventListener('click', () => {
      dates.forEach((item) => {
        item.classList.remove('active')
      })

      date.classList.add('active')
    })
  })

  times.forEach((time) => {
    time.addEventListener('click', () => {
      times.forEach((item) => {
        item.classList.remove('active')
      })

      time.classList.add('active')
    })
  })

  form.addEventListener('input', () => {
    let nameFilled = userName.value.trim().length > 0
    let emailFilled = email.value.trim().length > 0

    if (nameFilled && emailFilled) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let nameFilled = userName.value.trim().length > 0
    let emailFilled = email.value.trim().length > 0

    if (!nameFilled || !emailFilled) return

    popup.style.display = 'flex'
  })

  popup.addEventListener('click', () => {
    popup.style.display = 'none'
  })
}
