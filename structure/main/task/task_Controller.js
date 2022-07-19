class task_Controller {
    constructor(someName, someDescription = null) {
        // this.someColor = someColor
        this.someName = someName
        this.someDescription = someDescription
        this.completed = false
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
            newParent.idsDom.inputName.value,
            newParent.idsDom.description.value,
        ))
        updateLocal()
    }

    static editEl = (newParent, elementsArray, index) => {
        elementsArray[index] = new this(
            // [
            //     //! [0] = index
            //     newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].index,
            //     //! [1] = value
            //     newParent.idsDom.inputColor.options[newParent.idsDom.inputColor.options.selectedIndex].value
            // ],
            newParent.idsDom.inputName.value,
            newParent.idsDom.description.value,
        )
        updateLocal()
    }

    static removeEl = (elementsArray, index) => {
        elementsArray.splice(index, 1)
        updateLocal()
    }
}