class Controller {
    constructor(someColor, someName) {
        this.someColor = someColor
        this.someName = someName
    }

    static renderEls = (
        newParent,
        elementsArray,
        renderPlace,
        simpleSelector,
    ) => {
        renderPlace.innerHTML = ''
        if (elementsArray.length > 0)
            elementsArray.forEach((item, index) => {
                renderPlace.innerHTML += newParent.create(item, simpleSelector, index)
            })
    }

    static addEl = (newParent, elementsArray) => {
        elementsArray.push(new this(
            [
                //! [0] = index
                newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].index,
                //! [1] = value
                newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].value
            ],
            newParent.idsDom.inputName.value
        ))
        updateLocal()
    }

    static editEl = (newParent, elementsArray, index) => {
        elementsArray[index] = new this(
            [
                //! [0] = index
                newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].index,
                //! [1] = value
                newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].value
            ],
            newParent.idsDom.inputName.value
        )
        updateLocal()

    }

    static removeEl = (newParent, elementsArray, index) => {
        elementsArray.splice(index, 1)
        updateLocal()
    }
}