class Using {
    static render(inputArray, simpleSelector) {
        Controller.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.simpleSelector,
        )
    }

    static add(inputArray) {
        Controller.addEl(this, inputArray)
        this.render(inputArray, this.idsDom.simpleSelector)
        Editor.resetEditor(this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor)
    }

    static edit(inputArray, index) {
        Controller.editEl(this, inputArray, index)
        this.render(inputArray)
        Editor.resetEditor(this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static remove(inputArray, index) {
        Controller.removeEl(inputArray, index)
        this.render(inputArray, this.idsDom.simpleSelector)
    }
}