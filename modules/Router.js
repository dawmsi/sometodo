class Router {
    static locationResolver(inputLocation) {
        let routeName
        let location = window.location.hash

        if (inputLocation) {
            location = inputLocation
        }

        routeName = location.slice(2, 3).toUpperCase() + location.slice(3)

        if (location || location === '') {
            Aside.hideshow()
            switch (location) {
                case '':
                    routeName = 'Upcoming'
                    currentArray = upcomingArray
                    break
                case '#/previous':
                    currentArray = previousArr
                    break
                case '#/today':
                    currentArray = upcomingArray
                    break
                case '#/upcoming':
                    currentArray = upcomingArray
                    break
                case '#/marks':
                    currentArray = Task.filterTasks('someMark')
                    break
                case '#/projects':
                    currentArray = Task.filterTasks('someSelect')
                    break
                default:
                    routeName = 'Not found'
                    currentArray = []
                    break
            }
            // Task.toggleTask(currentArray)
        }

        route.innerHTML = `
        <h2>${routeName}</h2>
        `
        Task.render(currentArray)
    }
}
