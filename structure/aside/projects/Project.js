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

    static create = (item, simpleSelector, index) => {
        return `
        <li class="item ${simpleSelector}">
        <div class="btn-wrapper">
        <button onclick="Editor.showEditor(
            ${this.name}.idsDom,
            ${this.name},
            this,
            ${index},)">
        <i id="${item.someColor[0]}" 
        class="fa fa-circle-thin" 
        style="color:${item.someColor[1]}"></i>
        </button>
        </div>
        <a id="name${index}" href="#">${item.someName}</a>
        <div class="btn-wrapper">
            <button onclick="Project.remove(${index})"><i class="fa fa-ellipsis-h"></i></button>
        </div>
        </li>
        `
    }

    static render() {
        Controller.renderEls(
            this,
            projectsArr,
            this.idsDom.renderPlace,
            this.idsDom.simpleSelector,
        )
        projectsDOMEls = document.querySelectorAll('.item-proj')
    }

    static add() {
        Controller.addEl(this, projectsArr)
        this.render()
        Editor.resetEditor(
            this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static edit(index) {
        Controller.editEl(this, projectsArr, index)
        this.render()
        Editor.resetEditor(
            this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static remove(index) {
        Controller.removeEl(this, projectsArr, index)
        this.render()
    }
}