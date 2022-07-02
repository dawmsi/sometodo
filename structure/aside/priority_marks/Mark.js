class Mark {

    static inputArray

    static takeArray() { this.inputArray = marksArr }

    static parentWindow = document.querySelector("#placeAdder")

    static Editor = document.querySelector('#markEditor')
    static btnShowEditor = document.querySelector('#btnShowEditor')
    static btnEditAdd = document.querySelector('#btnEditAdd')

    static inputName = document.querySelector("#inputName")
    static inputColor = document.querySelector('#colorM')

    constructor(someColor, someName) {
        this.someColor = someColor
        this.someName = someName
    }

    static resetIt() {
        this.inputName.value = ''
        this.inputColor.options.selectedIndex = 3
        this.inputColor.style = `color: none`
    }

    static toggleEls() {
        this.btnShowEditor.classList.toggle('cencelBtn')
        this.Editor.classList.toggle('addingEl')
    }

    static createEl = (mark, index) => {
        return `
        <li class="item" id="item${index}">
        <button onclick="Mark.showEditor(${mark, index})">
        <i class="fa fa-tag" style="color:${mark.someColor}"></i>
        </button>
        <a href="">${mark.someName}</a>
        <div class="btn-wrapper">
        <button onclick="Mark.removeEl(${index})"><i class="fa fa-trash"></i></button>
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
            <button onclick="Mark.editEl(${index})">
            <i class="fa fa-pencil"></i>
            </button>
            `
            document.querySelector(`#item${index}`).classList.toggle
        }
        else {
            this.btnEditAdd.innerHTML = `
            <button onclick="Mark.addEl()">
            <i class="fa fa-check"></i>
            </button>
            `
        }
    }

    static renderEl = () => {
        this.takeArray()
        Mark.parentWindow.innerHTML = ''
        if (this.inputArray.length > 0)
            this.inputArray.forEach((mark, index) => {
                Mark.parentWindow.innerHTML += Mark.createEl(mark, index)
            })
        marksEls = document.querySelectorAll(".mark")
    }

    static addEl = () => {
        this.takeArray()
        this.inputArray.push(new Mark(
            this.inputColor.options[Mark.inputColor.options.selectedIndex].value,
            this.inputName.value
        ))
        updateLocal()
        this.renderEl()
        this.resetIt()
        this.toggleEls()
    }

    static editEl = (index) => {
        this.takeArray()
        this.inputArray[index] = new Mark(
            this.inputColor.options[Mark.inputColor.options.selectedIndex].value,
            this.inputName.value
        )
        updateLocal()
        this.renderEl()
        this.resetIt()
        this.toggleEls()
    }

    static removeEl = (index) => {
        this.takeArray()
        this.inputArray.splice(index, 1)
        updateLocal()
        this.renderEl()
    }
}