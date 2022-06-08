import '../styles/index.css';
import homeContent from './home';
import menuContent from './menu';
import contactContent from './contact';


window.addEventListener('DOMContentLoaded',() => {
    const contentDiv = document.querySelector("#content");
    const mainEl = document.createElement('main');
    mainEl.classList.add('main-content')
    
    function clearContent() {
        mainEl.innerHTML = ''
    }

    const tabController = document.createElement('div');
    tabController.classList.add("btn-container")
    const tabContentArr = ['home', 'menu', 'contact'];

    const tabElements = tabContentArr.map(name => {
        return `<button data-visible=${false} data-name="${name}" class="tab-item text-red fs-500">${name}</button>`
    });

    tabController.innerHTML = tabElements.join('');
    contentDiv.append(tabController, mainEl);

    const tabButtons = [...document.querySelectorAll('[data-visible]')]
    homeContent();

   tabButtons.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            if (e.target.dataset.name === "home") {
                clearContent();
                homeContent();
            }
            if (e.target.dataset.name === "menu") {
                clearContent();
                menuContent();
            }
            if (e.target.dataset.name === "contact") {
                clearContent();
                contactContent();
            }
        })
    })



});

