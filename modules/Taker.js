class Taker {
    static someArray
    static touchArray = (someArray) => { this.someArray = someArray }

    static fromHtml = (
        inputColor,
        inputName,
        btnShowEditor,
        btnSubmit,
        wrapperEditor,
        renderPlace,
        simpleSelector,
    ) => {
        return {
            inputColor: document.querySelector(inputColor),
            inputName: document.querySelector(inputName),
            btnShowEditor: document.querySelector(btnShowEditor),
            btnSubmit: document.querySelector(btnSubmit),
            wrapperEditor: document.querySelector(wrapperEditor),
            renderPlace: document.querySelector(renderPlace),
            simpleSelector: simpleSelector,
        }
    }

}