// ***************** Declarations ***************** //
const linkToShortcuts = './data/shortcuts.json'
const linkToCheatsheets = './data/cheatsheets.json'
const linkToDictionary = './data/dictionary.json'

// ***************** Functions ***************** //
function fetchData () {
  fetch(linkToShortcuts)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => displayShortcuts(data))

  fetch(linkToCheatsheets)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => displayCheatsheets(data))

  fetch(linkToDictionary)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => displayDictionary(data))
}

function displayShortcuts(data) {
    const shortcutsSection = document.querySelector('#nav-shortcuts')
    const tab = shortcutsSection.querySelector('#shortcutsList-tab') 
    const tabContent = shortcutsSection.querySelector('#shortcutsVerticalNav-tabContent') 

    for (const [category, value] of Object.entries(data)) {
        const tabBtn = document.createElement('a')
        const tabContentElement = document.createElement('div')
        const table = document.createElement('table')
        const tbody = document.createElement('tbody')

        tabBtn.classList.add('list-group-item', 'list-group-item-action')
        tabBtn.id = 'list-' + category + '-list'
        tabBtn.setAttribute('data-bs-toggle', 'list')
        tabBtn.href = '#list-' + category
        tabBtn.textContent = category
        
        tabContentElement.classList.add('tab-pane', 'fade')
        tabContentElement.id = 'list-' + category
        tabContentElement.append(table)
        
        table.classList.add('table', 'table-striped', 'table-hover', 'table-bordered')
        table.append(tbody)

        value.forEach(element => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')

            td1.textContent = element.shortcut
            td2.textContent = element.label

            tr.append(td1)
            tr.append(td2)
            tbody.append(tr)
        });
        
        tab.append(tabBtn)
        tabContent.append(tabContentElement)
        
    }

    tab.querySelector('a').classList.add('active')
    tabContent.querySelector('div:first-child').classList.add('show', 'active')
}

function displayCheatsheets(data) {
  
}

function displayDictionary(data) {
    const shortcutsSection = document.querySelector('#nav-dictionary')
    const tab = shortcutsSection.querySelector('#dictionaryList-tab') 
    const tabContent = shortcutsSection.querySelector('#dictionaryVerticalNav-tabContent') 

    for (const [category, value] of Object.entries(data)) {
        const tabBtn = document.createElement('a')
        const tabContentElement = document.createElement('div')
        const table = document.createElement('table')
        const tbody = document.createElement('tbody')

        tabBtn.classList.add('list-group-item', 'list-group-item-action')
        tabBtn.id = 'list-' + category + '-list'
        tabBtn.setAttribute('data-bs-toggle', 'list')
        tabBtn.href = '#list-' + category
        tabBtn.textContent = category
        
        tabContentElement.classList.add('tab-pane', 'fade')
        tabContentElement.id = 'list-' + category
        tabContentElement.append(table)
        
        table.classList.add('table', 'table-striped', 'table-hover', 'table-bordered')
        table.append(tbody)

        value.forEach(element => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')

            td1.textContent = element.word
            td2.textContent = element.definition

            tr.append(td1)
            tr.append(td2)
            tbody.append(tr)
        });
        
        tab.append(tabBtn)
        tabContent.append(tabContentElement)
        
    }

    tab.querySelector('a').classList.add('active')
    tabContent.querySelector('div:first-child').classList.add('show', 'active')
}

fetchData()