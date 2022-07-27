class Take {
    static fromHtml = (
        inputSelect,
        inputName,
        btnShowEditor,
        btnSubmit,
        wrapperEditor,
        renderPlace,
        simpleSelector,
        description
    ) => {
        if (description) {
            return {
                inputSelect: document.querySelector(inputSelect),
                inputName: document.querySelector(inputName),
                btnShowEditor: document.querySelector(btnShowEditor),
                btnSubmit: document.querySelector(btnSubmit),
                wrapperEditor: document.querySelector(wrapperEditor),
                renderPlace: document.querySelector(renderPlace),
                simpleSelector: simpleSelector,
                description: document.querySelector(description)
            }
        } else {
            return {
                inputSelect: document.querySelector(inputSelect),
                inputName: document.querySelector(inputName),
                btnShowEditor: document.querySelector(btnShowEditor),
                btnSubmit: document.querySelector(btnSubmit),
                wrapperEditor: document.querySelector(wrapperEditor),
                renderPlace: document.querySelector(renderPlace),
                simpleSelector: simpleSelector,
            }
        }
    }

    static colorsFrom = (someID) => {
        let colors = []
        for (let index = 0; index < someID.length; index++) {
            colors.push(someID[index].style.color)
        }
        return colors
    }

}