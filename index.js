// ***************** Declarations ***************** //
const linkToData = './data.json'

// ***************** Functions ***************** //
function fetchData () {
  fetch(linkToData)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => displayPage(data))
}

function displayPage(data) {
    const tab = document.querySelector('#v-pills-tab') 
    const tabContent = document.querySelector('#v-pills-tabContent') 

    for (const [category, value] of Object.entries(data)) {
        const tabBtn = document.createElement('button')
        const tabContentElement = document.createElement('div')

        tabBtn.classList.add('nav-link')
        tabBtn.id = 'v-pills-' + category + '-tab'
        tabBtn.setAttribute('data-bs-toggle', 'pill')
        tabBtn.setAttribute('data-bs-target', "#v-pills-" + category)
        tabBtn.textContent = category

        tabContentElement.classList.add('tab-pane', 'fade')
        tabContentElement.id = 'v-pills-' + category

        value.forEach(element => {
            const shortcut = document.createElement('div')
            shortcut.textContent = element.shortcut + ' : ' + element.label
            tabContentElement.append(shortcut)
        });

        tab.append(tabBtn)
        tabContent.append(tabContentElement)
        
    }

    tab.querySelector('button:first-child').classList.add('active')
    tabContent.querySelector('div:first-child').classList.add('show', 'active')
}


fetchData()