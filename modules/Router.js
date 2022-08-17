const main = document.querySelector('#main')
const route = main.querySelector('#route')

let currentArray = todayArr

const locationResolver = location => {
    let routeName = location.slice(2, 3).toUpperCase() + location.slice(3)
    route.innerHTML = `
    <h2>${routeName}</h2>
    `
    switch (location) {
        case '#/previous':
            currentArray = previousArr
            break
        case '#/today':
            currentArray = todayArr
            break
        case '#/upcoming':
            currentArray = []
            break
        case '#/marks':
            currentArray = Task.filterTasks('someMark')
            break
        case '#/projects':
            currentArray = Task.filterTasks('someSelect')
            break
        default:
            route.innerHTML = `
            <h2>Not found</h2>
            `
            currentArray = []
            break
    }
    Task.render(currentArray)
}

window.addEventListener('load', () => {
    const location = window.location.hash
    if (location) {
        locationResolver(location)
    }
})