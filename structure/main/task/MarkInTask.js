class MarkInTask {

    static simpleSelector = 'select-mark'

    static idsDom = Take.elDOMfrom({
        inputColor: '#selectM',
        renderPlace: '#selectM',
    })

    static create = (item, simpleSelector, index) => {
        return `
            <option id="${item.id}" class="${simpleSelector}"
             style="color:${index ? colorsMarks[item.someSelect] : '#fff'}">
             ${item.someName}
             </option> `
    }

    static render(inputArray) {
        Control.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.simpleSelector,
        )
        Router.locationResolver()
    }
}