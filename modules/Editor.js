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
            if (inputHTMLObj.inputColor) {
                if (newParent.name === 'Task') {
                    console.log(projectsArr[inputArray[index].someSelect[0]])
                    inputHTMLObj.inputColor.selectedIndex = projectsArr[inputArray[index].someSelect[0]].someSelect[0]
                    inputHTMLObj.inputColor.style.color = projectsArr[inputArray[index].someSelect[0]].someSelect[1]
                } else {
                    inputHTMLObj.inputColor.selectedIndex = inputArray[index].someSelect[0]
                    inputHTMLObj.inputColor.style.color = inputArray[index].someSelect[1]
                }
                inputHTMLObj.inputColor.addEventListener("change", () => {
                    inputHTMLObj.inputColor.style.color = inputHTMLObj.inputColor.options[inputHTMLObj.inputColor.options.selectedIndex].style.color
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
            if (inputHTMLObj.inputColor) {
                inputHTMLObj.inputColor.selectedIndex = 0
                inputHTMLObj.inputColor.style.color = inputHTMLObj.inputColor.options[inputHTMLObj.inputColor.options.selectedIndex].style.color
                inputHTMLObj.inputColor.addEventListener("change", () => {
                    inputHTMLObj.inputColor.style.color = inputHTMLObj.inputColor.options[inputHTMLObj.inputColor.options.selectedIndex].style.color
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