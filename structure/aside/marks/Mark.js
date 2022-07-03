class Mark {
    static inputArray
    static takeArray() { this.inputArray = marksArr }
    static parentWindow = document.querySelector("#placeMarks")
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
        this.inputColor.options.selectedIndex = 0
        this.inputColor.style = `color: none`
    }

    static toggleEls() {
        this.btnShowEditor.classList.toggle('cencelBtn')
        this.Editor.classList.toggle('addingEl')
    }

    static createEl = (item, index) => {
        return `
        <li class="item mark-item" id="item${index}">
        <button onclick="${this.name}.showEditor(${item, index})">
        <i class="fa fa-tag" style="color:${item.someColor}"></i>
        </button>
        <a href="">${item.someName}</a>
        <div class="btn-wrapper">
        <button onclick="${this.name}.removeEl(${index})">
        <i class="fa fa-trash"></i>
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
        marksEls = document.querySelectorAll(".mark-item")
    }

    static showEditor = (index) => {
        this.resetIt()
        this.toggleEls()
        if (index || index === 0) {
            this.takeArray()
            this.inputName.value = this.inputArray[index].someName
            this.inputColor.style = `color:${this.inputArray[index].someColor}`
            this.btnEditAdd.innerHTML = this.changeBtnToEdit(index)
            // document.querySelector(`#item${index}`).classList.toggle
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
        this.resetIt()
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