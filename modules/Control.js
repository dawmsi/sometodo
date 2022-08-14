class Control {
    constructor(someSelect, someName, someDescription, someMark = 0) {
        this.someSelect = someSelect
        this.someName = someName
        if (someDescription) this.someDescription = someDescription
        if (someMark || someMark === 0) this.someMark = someMark
        this.completed = false
        this.used = false
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
        elementsArray.push(
            new this(
                newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].index,
                newParent.idsDom.inputName.value,
                newParent.idsDom?.description?.value,
                newParent.idsDom?.inputMark?.selectedIndex
            ))
        updateLocal()
    }

    static editEl = (newParent, elementsArray, index) => {
        elementsArray[index] = new this(
            newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].index,
            newParent.idsDom.inputName.value,
            newParent.idsDom?.description?.value,
            newParent.idsDom?.inputMark?.selectedIndex
        )
        updateLocal()

    }

    static removeEl = (elementsArray, index) => {
        elementsArray.splice(index, 1)
        updateLocal()
    }


    static defaultNoSelected(array, string) {
        if (array) {
            if (array[0]?.someName !== string)
                array.unshift(new Control(0, string))
            else if (array[1]?.someName == string)
                array.splice(1, 1)
        }
    }
}