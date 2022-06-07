const taskInput = document.querySelector('#name-task')
const addBtn = document.querySelector('#add-task-btn')
const todoWrapper = document.querySelector('.todos-wrapper')

let tasksArr

!localStorage.tasksKey ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('tasksKey'))

let todoItemEls = []

class Task {
    constructor(nameTask){
        this.nameTask = nameTask,
        this.copleted = false
    }
}

const updateLocal = () => {
    localStorage.setItem('tasksKey', JSON.stringify(tasksArr))
}

const createTemplate = (task, index) => {
    return `
    <div class="todo-item ${task.completed ? 'checked' : ''}">
        <div class="checkbox-wrapper">
        <input onclick="toggleTask(${index})" type="checkbox" class="btn-complete" ${task.completed ? 'checked' : ''}>
        </div>
        <div class="nameTask">${task.nameTask}</div>

        <div class="btn-wrapper">
            <button onclick="removeTask(${index})" class="btn-remove">remove</button>
        </div>
    </div>
    `
}

const filterTasks = () => {
    let activeTasks = tasksArr.length && tasksArr.filter(item => !item.completed)
    let completedTasks = tasksArr.length && tasksArr.filter(item => item.completed)
    tasksArr = [...activeTasks,...completedTasks]
}

const renderList = () => {
    todoWrapper.innerHTML = ""
    if (tasksArr.length > 0){
        filterTasks()
        tasksArr.forEach((item,index) => {
            todoWrapper.innerHTML += createTemplate(item, index)
        })
        todoItemEls = document.querySelectorAll('.todo-item')
    }
}

renderList()

const toggleTask = index => {
    tasksArr[index].completed = !tasksArr[index].completed
    if(tasksArr[index].completed){
        todoItemEls[index].classList.add('checked')
    } else {
        todoItemEls[index].classList.remove('checked')
    }
    updateLocal()
    renderList()
}

addBtn.addEventListener('click',() => {
    tasksArr.push(new Task(taskInput.value))
    updateLocal()
    renderList()
    taskInput.value = ''
})

const removeTask = index => {
    tasksArr.splice(index,1)
    updateLocal()
    renderList()
}