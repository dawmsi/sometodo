let tasksArr

let todoItemEls = []

!localStorage.tasksKey ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('tasksKey'))

const updateLocal = () => {
    localStorage.setItem('tasksKey', JSON.stringify(tasksArr))
}

let countid = 2

Task.renderList()
