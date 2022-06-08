import dominicanFlag from '../assets/images/dominicanflag.jpeg';

function homeContent() {
    const content = document.querySelector('.main-content')

    const section = document.createElement('div')
    section.classList.add('home')
    section.setAttribute('id','home')

    const h1 = document.createElement('h1')
    h1.classList.add('hero-heading')
    h1.textContent =  'The Dominican Restaurant'
    section.appendChild(h1)

    const p = document.createElement('p')
    p.classList.add('hero-subheading')
    p.textContent =  'Flavors that will slap your taste buds'
    section.appendChild(p)

    const img = document.createElement('img')
    img.classList.add('home-img')
    img.src = dominicanFlag
    section.appendChild(img)

    content.appendChild(section)
}

export default homeContent