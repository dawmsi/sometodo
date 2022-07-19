class Mark {
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
            this,
            ${index},)">
        <i id="${item.someColor[0]}" 
        class="fa fa-bookmark-o" 
        style="color:${item.someColor[1]}"></i>
        </button>
        </div>
        <a id="name${index}" href="#">${item.someName}</a>
        <div class="btn-wrapper">
            <button onclick="Mark.remove(${index})"><i class="fa fa-trash"></i></button>
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

    static add() {
        Controller.addEl(this, marksArr)
        this.render(marksArr)
        Editor.resetEditor(
            this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static edit(index) {
        Controller.editEl(this, marksArr, index)
        this.render(marksArr)
        Editor.resetEditor(
            this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static remove(index) {
        Controller.removeEl(this, marksArr, index)
        this.render(marksArr)
    }
}