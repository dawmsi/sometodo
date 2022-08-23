class Editor {
    static resetEditor(
        wrapperEditor,
        btnShowEditor,
    ) {
        wrapperEditor.classList.toggle('showEditor')
        wrapperEditor.querySelector('form').reset()
        if (btnShowEditor && !btnShowEditor.classList.contains('add-link')) {
            btnShowEditor.classList.toggle('cencelBtn')
        }
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
        //* default
        if (inputHTMLObj.inputSelect) {
            inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
            inputHTMLObj.inputSelect.addEventListener("change", () => {
                inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
            })
        }
        if (inputHTMLObj.inputMark) {
            inputHTMLObj.inputMark.addEventListener("change", () => {
                inputHTMLObj.inputMark.style.color = inputHTMLObj.inputMark.options[inputHTMLObj.inputMark.options.selectedIndex].style.color
            })
        }
        //* edit
        if (index || index === 0) {
            if (inputHTMLObj.inputSelect && inputHTMLObj.inputName && inputHTMLObj.btnSubmit) {
                inputHTMLObj.inputName.value = inputArray[index].someName
                inputHTMLObj.inputSelect.selectedIndex = inputArray[index].someSelect
                if (newParent.name === 'Task') {
                    const markIndexById = Take.indexByID(marksArr, inputArray[index].someMark)
                    const projectIndexById = Take.indexByID(projectsArr, inputArray[index].someSelect)
                    inputHTMLObj.inputMark.selectedIndex = markIndexById
                    inputHTMLObj.inputSelect.selectedIndex = projectIndexById
                    inputHTMLObj.inputMark.style.color = inputHTMLObj.inputMark.options[markIndexById].style.color 
                    inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[projectIndexById].style.color
                    inputHTMLObj.btnSubmit.innerHTML = `
                        <button onclick="${newParent.name}.edit(${newParent.nameArray},${inputArray[index].id})">Save</button>`
                }
                if (newParent.name === 'Project' || newParent.name === 'Mark') {
                    if (newParent.name === 'Project') {
                        currentArray = projectsArr
                        inputHTMLObj.inputSelect.style.color = colorsProjects[inputArray[index].someSelect]
                    }
                    if (newParent.name === 'Mark') {
                        currentArray = marksArr
                        inputHTMLObj.inputSelect.style.color = colorsMarks[inputArray[index].someSelect]
                    }
                    inputHTMLObj.btnSubmit.innerHTML = `
                    <button onclick="${newParent.name}.edit(${newParent.nameArray},${inputArray[index].id})">
                        <i class="fa fa-pencil"></i>
                        </button>`
                }

            }
            if (inputHTMLObj.description && inputArray[index]?.someDescription) {
                inputHTMLObj.description.value = inputArray[index].someDescription
            }
        }
        //* add
        else {
            if (newParent.name === 'Task') {
                inputHTMLObj.inputMark.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputMark.selectedIndex].style.color
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">Add</button>`
            }
            if (newParent.name === 'Project' || newParent.name === 'Mark') {
                if (newParent.name === 'Project') {
                    currentArray = projectsArr
                }
                if (newParent.name === 'Mark') {
                    currentArray = marksArr
                }
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">
                <i class="fa fa-check"></i>
                </button>`
            }
        }
    }
}