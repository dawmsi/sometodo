class Controller {
    constructor(someColor, someName) {
        this.someColor = someColor
        this.someName = someName
    }

    static renderEls = (newParent, elementsArray, renderPlace, simpleSelector) => {
        renderPlace.innerHTML = ''
        if (elementsArray.length > 0)
            elementsArray.forEach((item, index) => {
                renderPlace.innerHTML += newParent.createEl(item, simpleSelector, index)
            })
        // outputArray = document.querySelectorAll(simpleSelector)
    }

    static addEl = (newParent, elementsArray) => {
        elementsArray.push(new this(
            newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].value,
            newParent.idsDom.inputName.value
        ))
        updateLocal()
        this.renderEls(
            newParent,
            elementsArray,
            newParent.idsDom.renderPlace,
            newParent.idsDom.simpleSelector,
            // newParent.passTo.outputArray
        )
        Editor.resetEditor(
            newParent.idsDom.inputColor,
            newParent.idsDom.inputName,
            newParent.idsDom.btnShowEditor,
            newParent.idsDom.wrapperEditor
        )
    }

    static editEl = (newParent, elementsArray, index) => {
        elementsArray[index] = new this(
            newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].value,
            newParent.idsDom.inputName.value
        )
        updateLocal()
        this.renderEls(
            newParent,
            elementsArray,
            newParent.idsDom.renderPlace,
            newParent.idsDom.simpleSelector,
            // newParent.passTo.outputArray
        )
        Editor.resetEditor(
            newParent.idsDom.inputColor,
            newParent.idsDom.inputName,
            newParent.idsDom.btnShowEditor,
            newParent.idsDom.wrapperEditor
        )
    }

    static removeEl = (newParent, elementsArray, index) => {
        elementsArray.splice(index, 1)
        updateLocal()
        this.renderEls(
            newParent,
            elementsArray,
            newParent.idsDom.renderPlace,
            newParent.idsDom.simpleSelector,
            newParent.idsDom.outputArray,
        )
    }
}