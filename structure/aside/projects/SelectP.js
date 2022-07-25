class SelectP {
    static idsDom = {
        inputColor: document.querySelector('#selectP'),
        renderPlace: document.querySelector('#selectP'),
        simpleSelector: 'select-project'
    }


    static create = (item, simpleSelector, index) => {
        return `
            <option class="${simpleSelector}" id="${index} value="${item.someSelect[1]}"
             style="color:${item.someSelect[1]}">
             ${item.someName}
             </option> `
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