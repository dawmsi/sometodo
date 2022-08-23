class Mark extends Basic {
    static nameArray = 'marksArr'

    static simpleSelector = 'item-mark'

    static idsDom = Take.elDOMfrom({
        inputSelect: '#colorM',
        inputName: '#inputMark',
        btnShowEditor: '#btnShowEditor',
        btnSubmit: '#btnEditAdd',
        wrapperEditor: '#markEditor',
        renderPlace: '#placeMarks',
    })

    static create = (item, simpleSelector, index) => {
        if (index == 0) {
            return `
            <li class="item ${simpleSelector}">
            <div class="btn-wrapper">
            <button>
            <i class="fa fa-bookmark-o" 
            style="color:#fff"></i>
            </button>
            </div>
            <a id="name${index}" href="#">${item.someName}</a>
            </li>
            `
        }
        else if (item.used) {
            return `
            <li class="item ${simpleSelector}">
            <div class="btn-wrapper">
            <button onclick="Editor.showEditor(
                ${this.name}.idsDom,
                ${this.name},
                ${this.nameArray},
                ${index},)">
            <i class="fa fa-bookmark-o" 
            style="color:${colorsMarks[item.someSelect]}"></i>
            </button>
            </div>
            <a id="name${index}" href="#">${item.someName}</a>
            <div class="btn-wrapper">
                <button onclick="Pop.renderNewPop(Pop.popAccepter, ${testClickBeforeClick.name})"><i class="fa fa-ellipsis-h"></i></button>
            </div>
            </li>
            `
        }
        else {
            return `
            <li class="item ${simpleSelector}">
            <div class="btn-wrapper">
            <button onclick="Editor.showEditor(
                ${this.name}.idsDom,
                ${this.name},
                ${this.nameArray},
                ${index},)">
            <i class="fa fa-bookmark-o" 
            style="color:${colorsMarks[item.someSelect]}"></i>
            </button>
            </div>
            <a id="name${index}" href="#">${item.someName}</a>
            <div class="btn-wrapper">
                <button onclick="${this.name}.remove(marksArr, ${index})"><i class="fa fa-trash"></i></button>
            </div>
            </li>
            `
        }
    }

    static beforeRender() {
        Control.defaultNoSelected(marksArr, 'None')
    }

    static afterRender() {
        marksDOMEls = document.querySelectorAll(`.${this.simpleSelector}`)
        MarkInTask.render(marksArr)
    }
}