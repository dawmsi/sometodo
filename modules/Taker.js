class Taker {
    static fromHtml = (
        inputColor,
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
                inputColor: document.querySelector(inputColor),
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
    static fromArrToPlace = (arrayDOM, idDOM) => {
        document.querySelector(idDOM).innerHTML = ''
        arrayDOM.forEach((item, index) => {
            console.log()
            document.querySelector(idDOM).innerHTML +=
                `
            <option style="color:${item.childNodes[1].childNodes[1].style.color}">
            <a id="${index}">
            <i>&#xf097;</i>
            <p style"color:#fff">${item.childNodes[3].text}</p>
            </a>
            </option>
            `
        })
    }
}