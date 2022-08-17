class Basic {
    static beforeRender() {
        return false
    }

    static afterRender() {
        return false
    }

    static render(inputArray) {
        this.beforeRender()
        Control.renderEls(
            this,
            inputArray,
            this.idsDom.renderPlace,
            this.simpleSelector,
        )
        this.afterRender()
    }

    static add(inputArray) {
        Control.addEl(this, inputArray)
        this.render(inputArray)
        Editor.resetEditor(this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor)
    }

    static edit(inputArray, index) {
        debugger
        Control.editEl(this, inputArray, index)
        updateLocal()
        locationResolver(window.location.hash)
        this.render(currentArray)
        Editor.resetEditor(this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
    }

    static remove(inputArray, index) {
        Control.removeEl(inputArray, index)
        this.render(inputArray)
    }
}