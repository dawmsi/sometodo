class Editor {
    static resetEditor(
        inputColor,
        inputName,
        btnShowEditor,
        wrapperEditor
    ) {
        // inputColor.options.selectedIndex = 0
        inputColor.style = `color: none`
        inputName.value = ''
        btnShowEditor.classList.toggle('cencelBtn')
        wrapperEditor.classList.toggle('showEditor')
    }

    static showEditor = (
        inputColor,
        inputName,
        btnShowEditor,
        btnSubmit,
        wrapperEditor,
        index,
    ) => {
        this.resetEditor(
            inputColor,
            inputName,
            btnShowEditor,
            wrapperEditor
        )
        if (index || index === 0) {
            Taker.touchArray(projectsArr)
            inputName.value = Taker.someArray[index].someName
            inputColor.style = `color:${Taker.someArray[index].someColor}`
            btnSubmit.innerHTML = `
            <button onclick="${Project.name}.editEl(${index})">
                <i class="fa fa-pencil"></i>
                </button>
            `
        }
        else {
            btnSubmit.innerHTML = `
            <button onclick="Project.addEl()">
                <i class="fa fa-check"></i>
                </button>
            `
        }
    }
}