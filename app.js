let tasksArr
let marksArr

let todoItemEls = []
let marksEls = []

!localStorage.tasksKey ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('tasksKey'))
!localStorage.tasksPrev ? previousTasks = [] : previousTasks = JSON.parse(localStorage.getItem('tasksPrev'))
!localStorage.marksKey ? marksArr = [] : marksArr = JSON.parse(localStorage.getItem('marksKey'))

const updateLocal = () => {
    localStorage.setItem('tasksKey', JSON.stringify(tasksArr))
    localStorage.setItem('tasksPrev', JSON.stringify(previousTasks))
    localStorage.setItem('marksKey', JSON.stringify(marksArr))
}



Task.renderList()
countPluser()
Mark.renderMark()
