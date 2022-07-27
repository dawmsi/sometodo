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
        inputArray,
        index
    ) => {
        this.resetEditor(
            inputHTMLObj.wrapperEditor,
            inputHTMLObj.btnShowEditor
        )
        if (index || index === 0) {
            inputHTMLObj.inputName.value = inputArray[index].someName
            if (inputHTMLObj.inputSelect) {
                inputHTMLObj.inputSelect.selectedIndex = inputArray[index].someSelect
                if (newParent.name === 'Task') {
                    inputHTMLObj.inputSelect.style.color = colorsProjects[projectsArr[inputArray[index].someSelect].someSelect]
                } else {
                    inputHTMLObj.inputSelect.style.color = inputArray[index].someSelect[1]
                }
                inputHTMLObj.inputSelect.addEventListener("change", () => {
                    inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
                })
            }
            if (inputHTMLObj.description) {
                inputHTMLObj.description.value = inputArray[index].someDescription
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
            if (inputHTMLObj.inputSelect) {
                inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
                inputHTMLObj.inputSelect.addEventListener("change", () => {
                    inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
                })
            }
            if (newParent.name === 'Task') {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">Add</button>
                `
            } else {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">
                    <i class="fa fa-check"></i>
                    </button>
                `
            }
        }
    }
}