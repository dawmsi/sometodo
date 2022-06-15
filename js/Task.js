class Task {
    static taskInput = document.querySelector('#name-task')
    static descriptionInput = document.querySelector('#description-task')
    static addBtn = document.querySelector('#add-task-btn')
    static parent = document.querySelector('.todos-wrapper')

    constructor(nameTask, descriptionTask = null){
        this.nameTask = nameTask,
        this.descriptionTask = descriptionTask,
        this.completed = false
    }

    static createTask = (task, index) => {
        return `
        <div class="todo-item ${task.completed ? 'checked' : ''}">
            <div class="checkbox-wrapper">
            <input onclick="Task.toggleTask(${index})" type="checkbox" 
            id="${index}" 
            class="custom-checkbox" ${task.completed ? 'checked' : ''}>
            <label for="${index}"></label>
            </div>
            <div class="detailsTask">
            <div class="nameTask"><p>${task.nameTask}</p></div>
            <div class="descriptionTask ${task.descriptionTask ? "hidden" : ""}"><p>${task.descriptionTask}</p></div>
            </div>
            <div class="btn-wrapper">
                <button class="btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button onclick="Task.removeTask(${index})" class="btn-edit-menu"><i class="fa fa-ellipsis-h"></i></button>
            </div>
        </div>
        `
    }

    static filterTasks = () => {
        let activeTasks = tasksArr.length && tasksArr.filter(item => !item.completed)
        let completedTasks = tasksArr.length && tasksArr.filter(item => item.completed)
        tasksArr = [...activeTasks,...completedTasks]
    }
    
    static  renderList = () => {
        Task.parent.innerHTML = ""
        if (tasksArr.length > 0){
            Task.filterTasks()
            tasksArr.forEach((item,index) => {
                Task.parent.innerHTML += Task.createTask(item, index)
            })
            todoItemEls = document.querySelectorAll('.todo-item')
        }
        console.log(tasksArr)
    }

    static toggleTask = index => {
        tasksArr[index].completed = !tasksArr[index].completed
        if(tasksArr[index].completed){
            todoItemEls[index].classList.add('checked')
        } else {
            todoItemEls[index].classList.remove('checked')
        }
        updateLocal()
        Task.renderList()
    }

    static addTask = () => {
        tasksArr.push(new Task(
            Task.taskInput.value,
            Task.descriptionInput.value
            ))
        updateLocal()
        Task.renderList()
        document.querySelector('#formMainAdd').reset()
    }

    static editTask = (item, index) => {
        tasksArr[index] = 
        updateLocal()
        console.log(tasksArr)
        Task.renderList()
    }

    static removeTask = index => {
        tasksArr.splice(index,1)
        updateLocal()
        console.log(tasksArr)
        Task.renderList()
    }
}