const main = document.querySelector('#main')
const route = main.querySelector('#route')

window.addEventListener('load', () => {
        Router.locationResolver()
})

let colorsProjects = Take.colorsFrom(Project.idsDom.inputSelect.options)

let colorsMarks = Take.colorsFrom(Mark.idsDom.inputSelect.options)

let todayArr
let marksArr
let projectsArr

let currentArray

let todoItemEls = []
let marksDOMEls = []
let projectsDOMEls = []

!localStorage.tasksKey ? todayArr = [] : todayArr = JSON.parse(localStorage.getItem('tasksKey'))
!localStorage.tasksPrev ? previousArr = [] : previousArr = JSON.parse(localStorage.getItem('tasksPrev'))
!localStorage.marksKey ? marksArr = [] : marksArr = JSON.parse(localStorage.getItem('marksKey'))
!localStorage.projectKey ? projectsArr = [] : projectsArr = JSON.parse(localStorage.getItem('projectKey'))

function updateLocal() {
    localStorage.setItem('tasksKey', JSON.stringify(todayArr))
    localStorage.setItem('tasksPrev', JSON.stringify(previousArr))
    localStorage.setItem('marksKey', JSON.stringify(marksArr))
    localStorage.setItem('projectKey', JSON.stringify(projectsArr))
}

function clearLocal() {
    localStorage.clear()
    location.reload()
}

function testClickBeforeClick() {
    alert("removed")
}

Mark.render(marksArr)
Project.render(projectsArr)

countPluser()
