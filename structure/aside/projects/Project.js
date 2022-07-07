class Project {
    static idsDom = Taker.fromHtml(
        '#colorP',
        '#inputProj',
        '#btnShowEditProj',
        '#btnEditAddProj',
        '#editorProject',
        '#placeProjects',
        'item-proj',
    )

    static createEl = (item, simpleSelector, index) => {
        return `
        <li class="item ${simpleSelector}" id="item${index}">
        <button onclick="Editor.showEditor(
            ${this.name}.idsDom.inputColor,
            ${this.name}.idsDom.inputName,
            ${this.name}.idsDom.btnShowEditor,
            ${this.name}.idsDom.btnSubmit,
            ${this.name}.idsDom.wrapperEditor,
            ${index})">
        <i class="fa fa-circle" style="color:${item.someColor}"></i>
        </button>
        <a href="">${item.someName}</a>
        <div class="btn-wrapper">
            <button onclick="Project.removeEl(${index})"><i class="fa fa-ellipsis-h"></i></button>
        </div>
        </li>
        `}

    static renderEls = () => {
        Taker.touchArray(projectsArr)
        Controller.renderEls(
            this,
            Taker.someArray,
            this.idsDom.renderPlace,
            this.idsDom.simpleSelector)
    }

    static addEl = () => {
        Controller.addEl(this, Taker.someArray)
    }

    static editEl = (index) => {
        Controller.editEl(this, Taker.someArray, index)
    }

    static removeEl = (index) => {
        Controller.removeEl(this, Taker.someArray, index)
    }
}