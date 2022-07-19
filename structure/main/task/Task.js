class Task {
    static idsDom = Taker.fromHtml(
        '#marksInTask',
        '#name-task',
        '.add-link',
        '#add-task-btn',
        '#adding',
        '.todos-wrapper',
        'todo-item',
        '#description-task'
    )

    static create = (item, simpleSelector, index) => {
        return `
        <div class="${simpleSelector} ${item.completed ? "checked" : ""}">
            <div class="checkbox-wrapper">
            <input onclick="Task.toggleTask(${index})" type="checkbox" 
            id="${index}" 
            class="custom-checkbox" ${item.completed ? "checked" : ""}>
            <label for="${index}"></label>
            </div>
            <div class="detailsTask">
            <div class="nameTask"><a>${item.someName}</a></div>
            <div class="descriptionTask ${item.someDescription ? "" : "hide"
            }"><p>${item.someDescription}</p></div>
            </div>
            <div class="btn-wrapper">
                <button onclick="Editor.showEditor(
                    ${this.name}.idsDom,
                    ${this.name},
                    this,
                    ${index},
                    )" class="btn-edit">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button onclick="Task.remove(${index})" class="btn-del">
                <i class="fa fa-trash"></i>
                </button>
                <button onclick="Pop.renderNewPop(popEditor)" class="btn-edit-menu"><i class="fa fa-ellipsis-h"></i>
                </button>
            </div>
        </div>
        `
    }

    static filterTasks = () => {
        let activeTasks =
            tasksArr.length && tasksArr.filter((item) => !item.completed)
        let completedTasks =
            tasksArr.length && tasksArr.filter((item) => item.completed)
        tasksArr = [...activeTasks, ...completedTasks]
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

        countPluser()
        updateLocal()
        this.render(tasksArr, 'todo-item')
    }

    static render(inputArray, simpleSelector) {
        task_Controller.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.idsDom.simpleSelector,
        )
        todoItemEls = document.querySelectorAll(`.${simpleSelector}`)
    }

    static add(inputArray) {
        task_Controller.addEl(this, inputArray)
        this.render(inputArray, 'todo-item')
        countPluser()
        Editor.resetEditor(Task.idsDom.wrapperEditor)
    }

    static edit(index) {
        task_Controller.editEl(this, tasksArr, index)
        this.render(tasksArr, 'todo-item')
        countPluser()
        Editor.resetEditor(Task.idsDom.wrapperEditor)
    }

    static remove(index) {
        task_Controller.removeEl(tasksArr, index)
        this.render(tasksArr, 'todo-item')
        countPluser()
    }
}