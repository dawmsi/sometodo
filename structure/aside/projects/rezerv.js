class Project {
    static inputArray
    static takeArray() { this.inputArray = projectsArr }

    static parentWindow = document.querySelector("#placeProjects")
    static Editor = document.querySelector('#editorProject')
    static btnShowEditor = document.querySelector('#btnShowEditProj')
    static btnEditAdd = document.querySelector('#btnEditAddProj')
    static inputName = document.querySelector("#inputPjoj")
    static inputColor = document.querySelector('#colorP')

    constructor(someColor, someName) {
        this.someColor = someColor
        this.someName = someName
    }
    static toggleEls() {
        this.btnShowEditor.classList.toggle('cencelBtn')
        this.Editor.classList.toggle('addingEl')
    }

    static createEl = (item, index) => {
        return `
        <li class="item project-item" id="item${index}">
        <button onclick="${this.name}.showEditor(${item, index})">
        <i class="fa fa-circle" style="color:${item.someColor}"></i>
        </button>
        <a href="">${item.someName}</a>
        <div class="btn-wrapper">
        <button onclick="${this.name}.removeEl(${index})">
        <i class="fa fa-ellipsis-h"></i>
        </button>
        </div>
        </li>
        `
    }

    static changeBtnToEdit = (index) => {
        return `
        <button onclick="${this.name}.editEl(${index})">
            <i class="fa fa-pencil"></i>
            </button>
        `
    }

    static changeBtnToAdd = () => {
        return `
        <button onclick="${this.name}.addEl()">
            <i class="fa fa-check"></i>
            </button>
        `
    }

    static selectorAllItems = () => {
        projEls = document.querySelectorAll(".project-item")
    }

    static resetEditor() {
        this.inputName.value = ''
        this.inputColor.options.selectedIndex = 0
        this.inputColor.style = `color: none`
    }

    static showEditor = (index) => {
        this.resetEditor()
        this.toggleEls()
        if (index || index === 0) {
            this.takeArray()
            this.inputName.value = this.inputArray[index].someName
            this.inputColor.style = `color:${this.inputArray[index].someColor}`
            this.btnEditAdd.innerHTML = this.changeBtnToEdit(index)
        }
        else {
            this.btnEditAdd.innerHTML = this.changeBtnToAdd()
        }
    }

    static renderEl = () => {
        this.takeArray()
        this.parentWindow.innerHTML = ''
        if (this.inputArray.length > 0)
            this.inputArray.forEach((item, index) => {
                this.parentWindow.innerHTML += this.createEl(item, index)
            })
        this.selectorAllItems()
    }

    static addEl = () => {
        this.takeArray()
        this.inputArray.push(new this(
            this.inputColor.options[this.inputColor.options.selectedIndex].value,
            this.inputName.value
        ))
        updateLocal()
        this.renderEl()
        this.resetEditor()
        this.toggleEls()
    }

    static editEl = (index) => {
        this.takeArray()
        this.inputArray[index] = new this(
            this.inputColor.options[this.inputColor.options.selectedIndex].value,
            this.inputName.value
        )
        updateLocal()
        this.renderEl()
        this.resetEditor()
        this.toggleEls()
    }

    static removeEl = (index) => {
        this.takeArray()
        this.inputArray.splice(index, 1)
        updateLocal()
        this.renderEl()
    }
}