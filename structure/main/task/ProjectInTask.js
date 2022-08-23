class ProjectInTask {

    static simpleSelector = 'select-project'

    static idsDom = Take.elDOMfrom({
        inputColor: '#selectP',
        renderPlace: '#selectP',
    })

    static create = (item, simpleSelector, index) => {
        return `
            <option id="${item.id}" class="${simpleSelector}"
             style="color:${index ? colorsProjects[item.someSelect] : '#fff'}">
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