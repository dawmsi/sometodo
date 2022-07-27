class Controller {
    constructor(someSelect, someName, someDescription = null) {
        this.someSelect = someSelect
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
        if (newParent.idsDom.description) {
            elementsArray.push(new this(
                newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].index,
                newParent.idsDom.inputName.value,
                newParent.idsDom.description.value,
            ))
        }
        else {
            elementsArray.push(new this(
                newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].index,
                newParent.idsDom.inputName.value))
        }
        updateLocal()
    }

    static editEl = (newParent, elementsArray, index) => {
        if (newParent.idsDom.description) {
            elementsArray[index] = new this(
                newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].index,
                newParent.idsDom.inputName.value,
                newParent.idsDom.description.value,
            )
        } else {
            elementsArray[index] = new this(
                newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].index,
                newParent.idsDom.inputName.value,
            )
        }
        updateLocal()

    }

    static removeEl = (elementsArray, index) => {
        elementsArray.splice(index, 1)
        updateLocal()
    }
}