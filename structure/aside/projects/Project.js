class Project {

    static inputArray

    static takeArray() { this.inputArray = marksArr }

    static parentWindow = document.querySelector("#placeProjects")

    static Editor = document.querySelector('#editorProject')
    static btnShowEditor = document.querySelector('#btnShowEditProj')
    static btnEditAdd = document.querySelector('#btnEditAddProj')

    static inputName = document.querySelector("#inputPjoj")

    static prioSelect = document.querySelector('#colorP')

    constructor(priority, someName) {
        this.priority = priority
        this.someName = someName
    }

    static resetIt() {
        this.inputName.value = ''
        this.inputColor.options.selectedIndex = 3
        this.inputColor.style = `color: none`
    }

    static toggleEls() {
        this.btnShowEditor.classList.toggle('cencelBtn')
        this.Editor.classList.toggle('addingMark')
    }

    static createMark = (mark, index) => {
        return `
        <li class="item" id="item${index}">
        <i class="fa fa-tag" style="color:${mark.someColor}"></i>
        <a href="">${mark.someName}</a>
        <div class="btn-wrapper">
        <button onclick="Mark.showEditor(${mark, index})"><i class="fa fa-edit"></i></button>
        <button onclick="Mark.removeMark(${index})"><i class="fa fa-trash"></i></button>
        </div>
        </li>
        `
    }

    static showEditor = (index) => {
        this.resetIt()
        this.toggleEls()
        if (index || index === 0) {
            this.takeArray()
            this.inputName.value = this.inputArray[index].someName
            this.inputColor.options[Mark.inputColor.options
                .selectedIndex].value = this.inputArray[index].someColor
            this.inputColor.style = `color:${this.inputArray[index].someColor}`
            this.btnEditAdd.innerHTML = `
            <button onclick="Mark.editMark(${index})">
            <i class="fa fa-floppy-o"></i>
            </button>
            `
            document.querySelector(`#item${index}`).classList.toggle
        }
        else {
            this.btnEditAdd.innerHTML = `
            <button onclick="Mark.addMark()">
            <i class="fa fa-check"></i>
            </button>
            `
        }
    }

    static renderMark = () => {
        this.takeArray()
        Mark.parentWindow.innerHTML = ''
        if (this.inputArray.length > 0)
            this.inputArray.forEach((mark, index) => {
                Mark.parentWindow.innerHTML += Mark.createMark(mark, index)
            })
        marksEls = document.querySelectorAll(".mark")
    }

    static addMark = () => {
        this.takeArray()
        this.inputArray.push(new Mark(
            this.inputColor.options[Mark.inputColor.options.selectedIndex].value,
            this.inputName.value
        ))
        updateLocal()
        this.renderMark()
        this.resetIt()
        this.toggleEls()
    }

    static editMark = (index) => {
        this.takeArray()
        this.inputArray[index] = new Mark(
            this.inputColor.options[Mark.inputColor.options.selectedIndex].value,
            this.inputName.value
        )
        updateLocal()
        this.renderMark()
        this.resetIt()
        this.toggleEls()
    }

    static removeMark = (index) => {
        this.takeArray()
        this.inputArray.splice(index, 1)
        updateLocal()
        this.renderMark()
    }
}