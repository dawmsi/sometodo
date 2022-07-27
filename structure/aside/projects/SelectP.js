class SelectP {

    static simpleSelector = 'select-project'

    static idsDom = {
        inputColor: document.querySelector('#selectP'),
        renderPlace: document.querySelector('#selectP'),
    }


    static create = (item, simpleSelector, index) => {
        return `
            <option class="${simpleSelector}"
             style="color:${index ? colorsProjects[item.someSelect] : '#fff'}">
             ${item.someName}
             </option> `
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