class Mark {

    static inputName = document.querySelector("#inputName")
    static parentWindow = document.querySelector("#placeAdder")
    static prioSelect = document.querySelector('#priority').options

    constructor(someName, priority) {
        this.someName = someName
        this.priority = priority
    }

    static createMark = (mark, index) => {
        return `
        <li class="item">
        <i class="fa fa-tag" style="color:${mark.priority}"></i>
        <a href="">${mark.someName}</a>
        <div class="btn-wrapper">
        <button><i class="fa fa-edit"></i></button>
        <button onclick="Mark.removeMark(${index})"><i class="fa fa-trash"></i></button>
        </div>
        </li>
        `
    }

    static renderMark = () => {
        Mark.parentWindow.innerHTML = ''
        if (marksArr.length > 0)
            marksArr.forEach((mark, index) => {
                Mark.parentWindow.innerHTML += Mark.createMark(mark, index)
            })
        marksEls = document.querySelectorAll(".mark")
    }

    static adderMark = () => {
        marksArr.push(new Mark(
            Mark.inputName.value,
            Mark.prioSelect[Mark.prioSelect.selectedIndex].value
        ))
        updateLocal()
        Mark.renderMark()
        Mark.resetIt()
    }
    static removeMark = (index) => {
        marksArr.splice(index, 1)
        updateLocal()
        Mark.renderMark()
    }
    static resetIt() {
        inputName.value = ''
    }
}