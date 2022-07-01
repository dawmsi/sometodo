class Mark {
    static parentWindow = document.querySelector("#placeAdder")

    static markEditor = document.querySelector('#markEditor')
    static btnShowEditor = document.querySelector('#btnShowEditor')
    static btnEditAdd = document.querySelector('#btnEditAdd')

    static inputName = document.querySelector("#inputName")

    static prioSelect = document.querySelector('#priority')

    constructor(someName, priority) {
        this.someName = someName
        this.priority = priority
    }

    static resetIt() {
        Mark.inputName.value = ''
        Mark.prioSelect.options.selectedIndex = 3
        Mark.btnShowEditor.classList.toggle('cencelBtn')
        Mark.markEditor.classList.toggle('addingMark')
        Mark.prioSelect.style = `color: none`
    }

    static createMark = (mark, index) => {
        return `
        <li class="item">
        <i class="fa fa-tag" style="color:${mark.priority}"></i>
        <a href="">${mark.someName}</a>
        <div class="btn-wrapper">
        <button onclick="Mark.showEditor(${index})"><i class="fa fa-edit"></i></button>
        <button onclick="Mark.removeMark(${index})"><i class="fa fa-trash"></i></button>
        </div>
        </li>
        `
    }

    static showEditor = (index) => {
        Mark.resetIt()
        if (index || index === 0) {
            Mark.inputName.value = marksArr[index].someName
            Mark.prioSelect.options[Mark.prioSelect.options
                .selectedIndex].value = marksArr[index].priority
            Mark.prioSelect.style = `color:${marksArr[index].priority}`
            Mark.btnEditAdd.innerHTML = `
            <button onclick="Mark.editMark(${index})">
            <i class="fa fa-floppy-o"></i>
            </button>
            `
        }
        else {
            Mark.btnEditAdd.innerHTML = `
            <button onclick="Mark.addMark()">
            <i class="fa fa-check"></i>
            </button>
            `
        }
    }

    static renderMark = () => {
        Mark.parentWindow.innerHTML = ''
        if (marksArr.length > 0)
            marksArr.forEach((mark, index) => {
                Mark.parentWindow.innerHTML += Mark.createMark(mark, index)
            })
        marksEls = document.querySelectorAll(".mark")
    }

    static addMark = () => {
        marksArr.push(new Mark(
            Mark.inputName.value,
            Mark.prioSelect.options[Mark.prioSelect.options.selectedIndex].value
        ))
        updateLocal()
        Mark.renderMark()
        Mark.resetIt()
    }

    static editMark = (index) => {
        marksArr[index] = new Mark(
            Mark.inputName.value,
            Mark.prioSelect.options[Mark.prioSelect.options.selectedIndex].value
        )
        updateLocal()
        Mark.renderMark()
        Mark.resetIt()
        console.log(marksArr)
    }

    static removeMark = (index) => {
        marksArr.splice(index, 1)
        updateLocal()
        Mark.renderMark()
    }
}