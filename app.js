let tasksArr
let marksArr
let projectsArr

let todoItemEls = []
let marksEls = []
let projEls = []

!localStorage.tasksKey ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('tasksKey'))
!localStorage.tasksPrev ? previousTasks = [] : previousTasks = JSON.parse(localStorage.getItem('tasksPrev'))
!localStorage.marksKey ? marksArr = [] : marksArr = JSON.parse(localStorage.getItem('marksKey'))
!localStorage.projectKey ? projectsArr = [] : projectsArr = JSON.parse(localStorage.getItem('projectKey'))


const updateLocal = () => {
    localStorage.setItem('tasksKey', JSON.stringify(tasksArr))
    localStorage.setItem('tasksPrev', JSON.stringify(previousTasks))
    localStorage.setItem('marksKey', JSON.stringify(marksArr))
    localStorage.setItem('projectKey', JSON.stringify(projectsArr))
}

Task.renderList()
countPluser()
Mark.renderEl()
Project.renderEls(projectsArr, Project.idsDom.renderPlace, Project.idsDom.simpleSelector)
