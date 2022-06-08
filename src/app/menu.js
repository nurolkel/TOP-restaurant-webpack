
function menuContent() {
    const content = document.querySelector('.main-content')

    const section = document.createElement('div')
    section.classList.add('menu-page')
    section.setAttribute('id','menu')

    const grid = document.createElement('div')
    grid.classList.add('grid')
    
    section.appendChild(grid)

    const menuCategories = (name) => {
        const category = document.createElement('div')
        category.classList.add('menu-heading-box')
        category.setAttribute('id', name)
        grid.appendChild(category)

        function capitalizeFirstconstter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const h1 = document.createElement('h1')
        h1.classList.add("menu-heading")
        h1.textContent = capitalizeFirstconstter(name)
        category.appendChild(h1)

        return category
    }

    const breakfast = menuCategories('breakfast')
    const lunch = menuCategories('lunch')
    

    const menuItems = (name, price, category) => {
        const item = document.createElement('div')
        item.classList.add('menu-item')

        const itemName = document.createElement('div')
        itemName.textContent = name
        item.appendChild(itemName)

        const itemPrice = document.createElement('div')
        itemPrice.textContent = price
        item.appendChild(itemPrice)

        category.appendChild(item)
    };
    
    menuItems('Kipe', '$5', breakfast)
    menuItems('Tres Golpes', '$9', breakfast)
    menuItems('Mangu con Huevos', '$7', breakfast)
    menuItems('Arroz con Pollo', '$11.50', lunch)
    menuItems('Pescado Frito', '$13.75', lunch)
    menuItems('Puerko Guisao', '$15.50', lunch)
    menuItems('Arroz con Pescado', '$13.75', lunch)


    content.appendChild(section)
}

export default menuContent;