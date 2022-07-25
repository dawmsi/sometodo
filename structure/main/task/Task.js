class Task extends Using {
    static nameArray = 'tasksArr'

    static idsDom = Taker.fromHtml(
        '#selectP',
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
            <label style="border: 2px solid ${item.someSelect[0] ? projectsArr[item.someSelect[0]].someSelect[1] : '#fff'}" 
            for="${index}"></label>
            </div>
            <div class="detailsTask">
            <div class="nameTask"><a>${item.someName}</a></div>
            <div class="descriptionTask ${item.someDescription ? "" : "hide"}">
            <p>${item.someDescription}</p></div>
            <div class="markTask" style="color:${item.someSelect}">
            <button
            class="${item.someSelect[0] ? "" : "hide"}"
            style="color: ${projectsArr[item.someSelect[0]].someSelect[1]}">
            ${item.someSelect[0] ? projectsArr[item.someSelect[0]].someName : ''}
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

    // static filterTasks = () => {
    //     let activeTasks =
    //         tasksArr.length && tasksArr.filter((item) => !item.completed)
    //     let completedTasks =
    //         tasksArr.length && tasksArr.filter((item) => item.completed)
    //     tasksArr = [...activeTasks, ...completedTasks]
    // }

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
        // console.log(previousTasks)
        // console.log(tasksArr)

        updateLocal()
        this.render(tasksArr, this.idsDom.simpleSelector)
    }

    static render(inputArray, simpleSelector) {
        Controller.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.idsDom.simpleSelector,
        )
        todoItemEls = document.querySelectorAll(`.${simpleSelector} `)
        countPluser()
    }

    // static add(inputArray) {
    //     task_Controller.addEl(this, inputArray)
    //     this.render(inputArray, this.idsDom.simpleSelector)
    //     Editor.resetEditor(this.idsDom.wrapperEditor,
    //         this.idsDom.btnShowEditor)
    // }

    // static edit(inputArray, index) {
    //     task_Controller.editEl(this, inputArray, index)
    //     this.render(inputArray, this.idsDom.simpleSelector)
    //     Editor.resetEditor(this.idsDom.wrapperEditor,
    //         this.idsDom.btnShowEditor)
    // }

    // static remove(inputArray, index) {
    //     task_Controller.removeEl(inputArray, index)
    //     this.render(inputArray, this.idsDom.simpleSelector)
    // }
}