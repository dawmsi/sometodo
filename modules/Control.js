class Control {
    constructor(someSelect, someName, someDescription, someMark, id, used) {
        this.someSelect = someSelect
        this.someName = someName
        if (someDescription) this.someDescription = someDescription
        if (someMark || someMark === 0) this.someMark = someMark

        id ? this.id = id : this.id = new Date().valueOf()
        used ? this.used = used : this.used = false
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
        elementsArray.push(
            new this(
                Number(newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].id),
                newParent.idsDom.inputName.value,
                newParent.idsDom?.description?.value,
                Number(newParent.idsDom?.inputMark?.options[newParent.idsDom.inputMark.options.selectedIndex].id),
            ))
        updateLocal()
    }

    static editEl = (newParent, elementsArray, itemID) => {
        elementsArray.forEach((item, index) => {
            if (item.id === itemID) {
                elementsArray[index] = new this(
                    Number(newParent.idsDom.inputSelect.options[newParent.idsDom.inputSelect.options.selectedIndex].id),
                    newParent.idsDom.inputName.value,
                    newParent.idsDom?.description?.value,
                    Number(newParent.idsDom?.inputMark?.options[newParent.idsDom.inputMark.options.selectedIndex].id),
                    item.id,
                    item?.used,
                )
            }
        })
        updateLocal()
    }

    static removeEl = (elementsArray, index) => {
        elementsArray.splice(index, 1)
        updateLocal()
    }

    static defaultNoSelected(array, string) {
        const firstItem = new Control(0, string)
        if (array) {
            if (array[0]?.someName !== string) {
                array.unshift(
                    { someSelect: 0, someName: string, id: 0, completed: false, used: false }
                )
            }
            else if (array[1]?.someName == string)
                array.splice(1, 1)
        }
    }
}