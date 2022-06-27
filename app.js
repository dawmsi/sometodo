let tasksArr

let todoItemEls = []

!localStorage.tasksKey ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('tasksKey'))
!localStorage.tasksPrev ? previousTasks = [] : previousTasks = JSON.parse(localStorage.getItem('tasksPrev'))


const updateLocal = () => {
    localStorage.setItem('tasksKey', JSON.stringify(tasksArr))
    localStorage.setItem('tasksPrev', JSON.stringify(previousTasks))
}

Task.toggleTask()

let countid = 2

Task.renderList()
