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
        Editor.resetEditor(
            this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
        this.render(inputArray)
    }

    static edit(inputArray, id) {
        Control.editEl(this, inputArray, id)
        Editor.resetEditor(
            this.idsDom.wrapperEditor,
            this.idsDom.btnShowEditor,
        )
        inputArray === currentArray
            ? this.render(inputArray)
            : Router.locationResolver()
    }

    static remove(inputArray, index, mainArr) {
        Control.removeEl(inputArray, index, mainArr)
        mainArr ? Router.locationResolver() : this.render(inputArray)
    }
}