class Task extends Basic {
    static nameArray = 'tasksArr'

    static simpleSelector = 'todo-item'

    static idsDom = Take.elDOMfrom({
        inputSelect: '#selectP',
        inputName: '#name-task',
        btnShowEditor: '.add-link',
        btnSubmit: '#add-task-btn',
        wrapperEditor: '#adding',
        renderPlace: '.todos-wrapper',
        description: '#description-task',
    })

    static create = (item, simpleSelector, index) => {
        return `
        <div class="${simpleSelector} ${item.completed ? "checked" : ""}">
            <div class="checkbox-wrapper">
            <input onclick="Task.toggleTask(${index})" type="checkbox" 
            id="${index}" 
            class="custom-checkbox" ${item.completed ? "checked" : ""}>
            <label style="border: 2px solid ${item.someSelect ? colorsProjects[projectsArr[item.someSelect].someSelect] : '#fff'}" 
            for="${index}"></label>
            </div>
            <div class="detailsTask">
            <div class="nameTask"><a>${item.someName}</a></div>
            <div class="descriptionTask ${item.someDescription ? "" : "hide"}">
            <p>${item.someDescription}</p></div>
            <div class="markTask" style="color:${item.someSelect}">
            <button
            id="projectTag"
            class="${item.someSelect ? "" : "hide"}"
            style="color: ${colorsProjects[projectsArr[item.someSelect].someSelect]}">
            ${item.someSelect ? projectsArr[item.someSelect].someName : ''}
            </button >
            </div >
            </div >
            <div class="btn-wrapper">
                <button onclick="Editor.showEditor(
                    ${this.name}.idsDom,
                    ${this.name},
                    ${this.nameArray},
                    ${index}
                    )" class="btn-edit">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button onclick="Task.remove(tasksArr, ${index})" class="btn-del">
                    <i class="fa fa-trash"></i>
                </button>
                <button onclick="Pop.renderNewPop(popEditor)" class="btn-edit-menu"><i class="fa fa-ellipsis-h"></i>
                </button>
            </div>
        </div >
            `
    }

    static filterTasks = () => {
        if (tasksArr.length) {
            let activeTasks = tasksArr.length && tasksArr.filter((item) => !item.completed)
            let completedTasks = tasksArr.length && tasksArr.filter((item) => item.completed)
            tasksArr = [...activeTasks, ...completedTasks]
        }
    }

    static toggleTask = (index) => {
        if (index) {
            tasksArr[index].completed = !tasksArr[index].completed
            if (tasksArr[index].completed) {
                todoItemEls[index].classList.add("checked")
                previousTasks.unshift(tasksArr[index])
            } else {
                todoItemEls[index].classList.remove("checked")
                previousTasks.splice(previousTasks.indexOf(tasksArr[index]), 1)
            }
        } else {
            if (index == 0) {
                tasksArr[index].completed = !tasksArr[index].completed
                if (tasksArr[index].completed) {
                    todoItemEls[index].classList.add("checked")
                    previousTasks.unshift(tasksArr[index])
                } else {
                    todoItemEls[index].classList.remove("checked")
                    previousTasks.splice(previousTasks.indexOf(tasksArr[index]), 1)
                }
            }
        }

        this.filterTasks()
        this.render(tasksArr, this.simpleSelector)
        updateLocal()

    }

    static AntiDeleteUsed() {
        projectsArr.forEach((project, index) => {
            project.used = false
            tasksArr.forEach(task => {
                if (task.someSelect === index) project.used = true
            })
        })
        updateLocal()
    }

    static beforeRun() {
        this.AntiDeleteUsed()
    }

    static afterRun() {
        todoItemEls = document.querySelectorAll(`.${this.simpleSelector} `)
        countPluser()

    }
}