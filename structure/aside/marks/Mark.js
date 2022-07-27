class Mark extends Using {
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

    static render(inputArray, simpleSelector) {
        Controller.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.simpleSelector,
        )
        marksDOMEls = document.querySelectorAll(`.${simpleSelector}`)
    }
}