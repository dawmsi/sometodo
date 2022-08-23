class Task extends Basic {
    static nameArray = "todayArr"

    static simpleSelector = "todo-item"

    static idsDom = Take.elDOMfrom({
        inputSelect: "#selectP",
        inputName: "#name-task",
        btnShowEditor: ".add-link",
        btnSubmit: "#add-task-btn",
        wrapperEditor: "#adding",
        renderPlace: ".todos-wrapper",
        description: "#description-task",
        inputMark: "#selectM"
    })

    static create = (item, simpleSelector, index) => {
        const markIndexById = Take.indexByID(marksArr, item.someMark)
        const projectIndexById = Take.indexByID(projectsArr, item.someSelect)
        return `
        <div id="${item.id}" class="${simpleSelector} ${item.completed ? "checked" : ""}">
            <div class="checkbox-wrapper">
            <input onclick="Task.toggleTask(currentArray,${index})" type="checkbox" 
            class="custom-checkbox" ${item.completed ? "checked" : ""}>
            <label style="border: 2px solid ${item.someSelect
                ? colorsProjects[projectsArr[projectIndexById]?.someSelect]
                : colorsMarks[marksArr[markIndexById]?.someSelect]
            }" 
            for="${index}"></label>
            </div>
            <div class="detailsTask">
                <div class="rowBtns">
                    <div class="markTags">
                        <button
                        id="markTag"
                        class="${item.someMark ? "" : "hide"}"
                        style="color: ${item.someMark ? colorsMarks[marksArr[markIndexById]?.someSelect] : colorsMarks[marksArr[item.someMark]?.someSelect]}">
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        ${item.someMark ? marksArr[markIndexById]?.someName : ""}
                        </button >
                    </div>
                    <div class="projectTags" style="color:${item.someSelect}">
                        <button
                        id="projectTag"
                        class="${item.someSelect ? "" : "hide"}"
                        style="color: ${colorsProjects[projectsArr[projectIndexById]?.someSelect]}">
                        <i id="project" class="fa fa-braille" aria-hidden="true"></i>
                        ${item.someSelect ? projectsArr[projectIndexById]?.someName : ""}
                        </button >
                    </div >
                </div>
            <div class="nameTask"><a>${item.someName}</a></div>
            <div class="descriptionTask ${item.someDescription ? "" : "hide"}">
            <p>${item.someDescription}</p></div>
            </div >
            <div class="btn-wrapper">
                <button onclick="Editor.showEditor(
                    ${this.name}.idsDom,
                    ${this.name},
                    currentArray,
                    ${index}
                    )" class="btn-edit">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button onclick="Task.remove(currentArray, ${index})" class="btn-del">
                    <i class="fa fa-trash"></i>
                </button>
                <button onclick="Pop.renderNewPop(popEditor)" class="btn-edit-menu"><i class="fa fa-ellipsis-h"></i>
                </button>
            </div>
        </div >
            `
    }

    static filterTasks = (filterCondition) => {
        if (todayArr.length) {
            return todayArr.filter((item) => item[filterCondition])
        }
        else return []
    }

    // static toggleTask = (inputArray, index) => {
    //     debugger
    //     if (index || index == 0) {
    //         inputArray[index].completed = !inputArray[index].completed
    //         if (inputArray[index].completed) {
    //             todoItemEls[index].classList.add("checked")
    //             // inputArray[index].lastArray = nameArray + 'Arr'
    //             if (inputArray !== previousArr) {
    //                 previousArr.unshift(inputArray[index])
    //                 inputArray.splice(inputArray.indexOf(inputArray[index]), 1)
    //             }
    //         } else {
    //             todoItemEls[index].classList.remove("checked")
    //             // linkToArray.link.unshift(previousArr[index])
    //             // previousArr.splice(previousArr.indexOf(previousArr[index]), 1)
    //         }
    //     }
    //     this.render(inputArray)
    //     updateLocal()
    // }

    static switchUsed(inputArray, checking) {
        inputArray.forEach((item) => {
            item.used = false
            todayArr.forEach((task) => {
                if (task[checking] === item.id) item.used = true
            })
        })
        updateLocal()
    }

    static beforeRender() {
        this.switchUsed(marksArr, 'someMark')
        Control.renderEls(
            Mark,
            marksArr,
            Mark.idsDom.renderPlace,
            Mark.simpleSelector,
        )
        this.switchUsed(projectsArr, 'someSelect')
        Control.renderEls(
            Project,
            projectsArr,
            Project.idsDom.renderPlace,
            Project.simpleSelector,
        )
    }

    static afterRender() {
        todoItemEls = document.querySelectorAll(`.${this.simpleSelector} `)
        countPluser()
    }
}
