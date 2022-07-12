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
        <button onclick="Editor.showEditor(
            ${this.name}.idsDom.inputColor,
            ${this.name}.idsDom.inputName,
            ${this.name}.idsDom.btnShowEditor,
            ${this.name}.idsDom.btnSubmit,
            ${this.name}.idsDom.wrapperEditor,
            ${this.name},
            ${index},
            this)">
        <i id="${item.someColor[0]}" 
        class="fa fa-bookmark-o" 
        style="color:${item.someColor[1]}"></i>
        </button>
        <a id="name${index}" href="#">${item.someName}</a>
        <div class="btn-wrapper">
            <button onclick="Mark.remove(${index})"><i class="fa fa-ellipsis-h"></i></button>
        </div>
        </li>
        `
    }

    static render() {
        Controller.renderEls(
            this,
            marksArr,
            this.idsDom.renderPlace,
            this.idsDom.simpleSelector,
        )
        marksDOMEls = document.querySelectorAll('.item-proj')
    }

    static add() {
        Controller.addEl(this, marksArr)
        this.render()
        Editor.resetEditor(
            this.idsDom.inputColor,
            this.idsDom.inputName,
            this.idsDom.btnShowEditor,
            this.idsDom.wrapperEditor
        )
    }

    static edit(index) {
        Controller.editEl(this, marksArr, index)
        this.render()
        Editor.resetEditor(
            this.idsDom.inputColor,
            this.idsDom.inputName,
            this.idsDom.btnShowEditor,
            this.idsDom.wrapperEditor
        )
    }

    static remove(index) {
        Controller.removeEl(this, marksArr, index)
        this.render()
    }
}