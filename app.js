const date = document.querySelector('.date')

date.innerHTML = new Date().getFullYear()

const bars = document.querySelector('.bars')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
bars.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

const navbar = document.querySelector('.navbar')
const toplink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {
  const windowHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (windowHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
  if (windowHeight > 361) {
    toplink.classList.add('show-toplink')
  } else {
    toplink.classList.remove('show-toplink')
  }
})

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const containerHeight = linksContainer.getBoundingClientRect().height
    const navHeight = navbar.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop - navHeight
    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + containerHeight
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})
