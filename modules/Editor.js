class Editor {
    static resetEditor(
        wrapperEditor,
        btnShowEditor,
    ) {
        wrapperEditor.classList.toggle('showEditor')
        wrapperEditor.getElementsByTagName('form')[0].reset()
        if (btnShowEditor && btnShowEditor.classList.contains('add-link')) {

        } else btnShowEditor.classList.toggle('cencelBtn')
    }

    static showEditor = (
        inputHTMLObj,
        newParent,
        item,
        index
    ) => {
        this.resetEditor(
            inputHTMLObj.wrapperEditor,
            inputHTMLObj.btnShowEditor
        )
        if (index || index === 0) {
            inputHTMLObj.inputName.value = item.parentNode.parentNode.getElementsByTagName('a')[0].text
            if (inputHTMLObj.inputColor) {
                inputHTMLObj.inputColor.options.selectedIndex = item.getElementsByTagName('i')[0].id
                inputHTMLObj.inputColor.style.color = item.getElementsByTagName('i')[0].style.color
                inputHTMLObj.inputColor.addEventListener("change", () => {
                    inputHTMLObj.inputColor.style.color = inputHTMLObj.inputColor.options[inputHTMLObj.inputColor.options.selectedIndex].style.color
                })
            }
            if (inputHTMLObj.description) {
                inputHTMLObj.description.value = item.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[0].textContent
            }
            if (newParent.name === 'Task') {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.edit(${newParent.nameArray},${index})">Save</button>
                `
            } else {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.edit(${newParent.nameArray},${index})">
                    <i class="fa fa-pencil"></i>
                    </button>
                `
            }
        }
        else {
            if (newParent.name === 'Task') {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">Add</button>
                `
            } else {
                if (inputHTMLObj.inputColor) {
                    inputHTMLObj.inputColor.options.selectedIndex = 0
                    inputHTMLObj.inputColor.style.color = '#fff'
                    inputHTMLObj.inputColor.addEventListener("change", () => {
                        inputHTMLObj.inputColor.style.color = inputHTMLObj.inputColor.options[inputHTMLObj.inputColor.options.selectedIndex].style.color
                    })
                }
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">
                    <i class="fa fa-check"></i>
                    </button>
                `
            }
        }
    }
}