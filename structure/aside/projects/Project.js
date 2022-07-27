class Project extends Using {
    static nameArray = 'projectsArr'

    static idsDom = Take.fromHtml(
        '#colorP',
        '#inputProj',
        '#btnShowEditProj',
        '#btnEditAddProj',
        '#editorProject',
        '#placeProjects',
        'item-proj',
    )

    static create = (item, simpleSelector, index) => {
        if (index === 0) {
            return `
        <li class="item ${simpleSelector}">
        <button>
        <i class="fa fa-circle-thin" 
        style="color:#fff"></i>
        </button>
        <a id="name${index}" href="#">${item.someName}</a>
        </li>
        `
        } else
            return `
        <li class="item ${simpleSelector}">
        <div class="btn-wrapper">
        <button onclick="Editor.showEditor(
            ${this.name}.idsDom,
            ${this.name},
            ${this.nameArray},
            ${index},)">
        <i class="fa fa-circle-thin" 
        style="color:${colorsProjects[item.someSelect]}"></i>
        </button>
        </div>
        <a id="name${index}" href="#">${item.someName}</a>
        <div class="btn-wrapper">
            <button onclick="${this.name}.remove(projectsArr, ${index})"><i class="fa fa-ellipsis-h"></i></button>
        </div>
        </li>
        `
    }

    static render(inputArray, simpleSelector) {
        Controller.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.idsDom.simpleSelector,
        )
        projectsDOMEls = document.querySelectorAll(`.${simpleSelector}`)
        SelectP.render(projectsArr, SelectP.idsDom.simpleSelector)
        Task.render(tasksArr, Task.idsDom.simpleSelector)
    }

    static defaultNoProject() {
        if (projectsArr) {
            if (projectsArr[0]?.someName !== 'Not In')
                projectsArr.unshift(new Controller(
                    [0, '#fff'],
                    'Not In'
                ))
        }
    }
}