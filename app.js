let tasksArr
let marksArr
let projectsArr

let todoItemEls = []
let marksDOMEls = []
let projectsDOMEls = []

!localStorage.tasksKey ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('tasksKey'))
!localStorage.tasksPrev ? previousTasks = [] : previousTasks = JSON.parse(localStorage.getItem('tasksPrev'))
!localStorage.marksKey ? marksArr = [] : marksArr = JSON.parse(localStorage.getItem('marksKey'))
!localStorage.projectKey ? projectsArr = [] : projectsArr = JSON.parse(localStorage.getItem('projectKey'))


function updateLocal() {
    localStorage.setItem('tasksKey', JSON.stringify(tasksArr))
    localStorage.setItem('tasksPrev', JSON.stringify(previousTasks))
    localStorage.setItem('marksKey', JSON.stringify(marksArr))
    localStorage.setItem('projectKey', JSON.stringify(projectsArr))
}

function clearLocal() {
    localStorage.clear()
    location.reload()
}


Mark.render(marksArr, Mark.idsDom.simpleSelector)

Project.defaultNoProject()
Project.render(projectsArr, Project.idsDom.simpleSelector)
SelectP.render(projectsArr, SelectP.idsDom.simpleSelector)


Task.render(tasksArr, Task.idsDom.simpleSelector)
countPluser()
Task.toggleTask()


