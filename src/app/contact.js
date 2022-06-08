function contactContent() {
    const content = document.querySelector('.main-content')

    const section = document.createElement('div')
    section.classList.add('grid--contact')

    const h1 = document.createElement('h1')
    h1.textContent = 'Get in touch'
    h1.classList.add("contact-heading")
    section.appendChild(h1)

    const contactItem = (name, link, text) => {
        const div = document.createElement('div')
        div.classList.add('contact-items')
        div.textContent = `${name}:`

        const a = document.createElement('a')
        a.classList.add('contact-a')
        a.textContent = text
        a.href = link
        div.appendChild(a)

        section.appendChild(div)
    }

    contactItem('Email', 'mailto:knunez267@gmail.com', 'knunez267@gmail.com')
    contactItem('LinkedIn', 'https://www.linkedin.com/in/knunezme', 'linkedin.com/in/knunezme')
    contactItem('Github', 'https://github.com/nurolkel', 'nurolkel')

    content.appendChild(section)
}

export default contactContent