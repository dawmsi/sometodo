class Basic {

    static additionallyDuringRendering() {
        return false
    }

    static render(inputArray) {
        Control.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.simpleSelector,
        )
        this.additionallyDuringRendering()
    }

    static add(inputArray) {
        Control.addEl(this, inputArray)
        this.render(inputArray)
        Editor.resetEditor(this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor)
    }

    static edit(inputArray, index) {
        Control.editEl(this, inputArray, index)
        this.render(inputArray)
        Editor.resetEditor(this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static remove(inputArray, index) {
        Control.removeEl(inputArray, index)
        this.render(inputArray)
    }
}