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
        //* default
        if (inputHTMLObj.inputSelect) {
            inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
            inputHTMLObj.inputSelect.addEventListener("change", () => {
                inputHTMLObj.inputSelect.style.color = inputHTMLObj.inputSelect.options[inputHTMLObj.inputSelect.options.selectedIndex].style.color
            })
        }
        //* for edit
        if (index || index === 0) {
            if (inputHTMLObj.inputSelect && inputHTMLObj.inputName && inputHTMLObj.btnSubmit) {
                inputHTMLObj.inputName.value = inputArray[index].someName
                inputHTMLObj.inputSelect.selectedIndex = inputArray[index].someSelect
                if (newParent.name === 'Task') {
                    //* check child mutation
                    const config = {
                        childList: true,
                    }
                    const callback = function (mutationsList) {
                        for (let mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                inputHTMLObj.inputSelect.selectedIndex = inputHTMLObj.inputSelect.options.selectedIndex
                            }
                        }
                    }
                    const observer = new MutationObserver(callback)
                    observer.observe(inputHTMLObj.inputSelect, config)
                    //**********************/
                    inputHTMLObj.inputSelect.style.color = colorsProjects[projectsArr[inputArray[index].someSelect].someSelect]
                    inputHTMLObj.btnSubmit.innerHTML = `
                        <button onclick="${newParent.name}.edit(${newParent.nameArray},${index})">Save</button>`
                }
                if (newParent.name === 'Project' || newParent.name === 'Mark') {
                    inputHTMLObj.btnSubmit.innerHTML = `
                    <button onclick="${newParent.name}.edit(${newParent.nameArray},${index})">
                        <i class="fa fa-pencil"></i>
                        </button>`
                }
                if (newParent.name === 'Project') {
                    inputHTMLObj.inputSelect.style.color = colorsProjects[inputArray[index].someSelect]
                }
                if (newParent.name === 'Mark') {
                    inputHTMLObj.inputSelect.style.color = colorsMarks[inputArray[index].someSelect]
                }
            }
            if (inputHTMLObj.description) {
                inputHTMLObj.description.value = inputArray[index].someDescription
            }
        }
        //* for add
        else {
            if (newParent.name === 'Task') {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">Add</button>`
            }
            if (newParent.name === 'Project' || newParent.name === 'Mark') {
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(${newParent.nameArray})">
                <i class="fa fa-check"></i>
                </button>`
            }
        }
    }
}