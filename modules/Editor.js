class Editor {
    static resetEditor(
        inputColor,
        inputName,
        btnShowEditor,
        wrapperEditor
    ) {
        inputColor.options.selectedIndex = 0
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
        newParent,
        index,
        item
    ) => {
        this.resetEditor(
            inputColor,
            inputName,
            btnShowEditor,
            wrapperEditor
        )
        if (index || index === 0) {
            inputName.value = item.parentElement.childNodes[3].text
            inputColor.options.selectedIndex = item.childNodes[1].id
            inputColor.style.color = item.childNodes[1].style.color
            inputColor.addEventListener("change", () => {
                inputColor.style.color = inputColor.options[inputColor.options.selectedIndex].style.color
            })
            btnSubmit.innerHTML = `
            <button onclick="${newParent.name}.edit(${index})">
                <i class="fa fa-pencil"></i>
                </button>
            `
        }
        else {
            btnSubmit.innerHTML = `
            <button onclick="${newParent}.add()">
                <i class="fa fa-check"></i>
                </button>
            `
        }
    }
}