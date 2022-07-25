class Mark extends Using {
    static nameArray = 'marksArr'

    static idsDom = Taker.fromHtml(
        '#colorM',
        '#inputMark',
        '#btnShowEditor',
        '#btnEditAdd',
        '#markEditor',
        '#placeMarks',
        'item-mark',
    )

    static create = (item, simpleSelector, index) => {
        return `
        <li class="item ${simpleSelector}">
        <div class="btn-wrapper">
        <button onclick="Editor.showEditor(
            ${this.name}.idsDom,
            ${this.name},
            ${this.nameArray},
            ${index},)">
        <i id="${item.someSelect[0]}" 
        class="fa fa-bookmark-o" 
        style="color:${item.someSelect[1]}"></i>
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
            this.idsDom.simpleSelector,
        )
        marksDOMEls = document.querySelectorAll(`.${simpleSelector}`)
    }
}