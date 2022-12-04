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
            let bntWrapperStart
            let bntWrapperEnd

            if (index === 0) {
                bntWrapperStart = `<button>
                <i class="fa fa-bookmark-o" 
                style="color:#fff"></i>
                </button>`
                bntWrapperEnd = ``
            } else {
                bntWrapperStart = `
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
                `
                if (item.used) {
                    bntWrapperEnd = `<div class="btn-wrapper">
                    <button onclick="Pop.renderNewPop(Pop.popAccepter, ${testClickBeforeClick.name})">
                    <i class="fa fa-ellipsis-h"></i></button>
                    </div>`
                } else {
                    bntWrapperEnd = `<div class="btn-wrapper">
                    <button onclick="${this.name}.remove(marksArr, ${index})">
                    <i class="fa fa-trash"></i></button>
                </div>`
                }
            }

            return `
            <li class="item ${simpleSelector}">
            ${bntWrapperStart}
            <a id="name${index}" href="#/marks/${item.id}" data-href="#/marks/${item.id}"
            onclick="Router.locationResolver(this.dataset.href)">${item.someName}</a>
            ${bntWrapperEnd}
            </li>
            `
    }

    static beforeRender() {
        Control.defaultNoSelected(marksArr, 'None')
    }

    static afterRender() {
        marksDOMEls = document.querySelectorAll(`.${this.simpleSelector}`)
        MarkInTask.render(marksArr)
    }
}