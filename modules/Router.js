const main = document.querySelector('#main')
const route = main.querySelector('#route')

let nameArray
let currentArray

const locationResolver = location => {
    let routeName = location.slice(2, 3).toUpperCase() + location.slice(3)
    route.innerHTML = `
    <h2>${routeName}</h2>
    `
    switch (location) {
        case '#/previous':
            nameArray = 'previous'
            currentArray = previousArr
            Task.render(currentArray, Task.simpleSelector)
            break
        case '#/today':
            nameArray = 'tasks'
            currentArray = tasksArr
            Task.render(currentArray, Task.simpleSelector)
            break
        case '#/upcoming':

            break
        case '#/marks':

            break
        case '#/projects':

            break
        default:
            route.innerHTML = `
            <h2>Not found</h2>
            `
    }
}

window.addEventListener('load', () => {
    const location = window.location.hash
    if (location) {
        locationResolver(location)
    }
})