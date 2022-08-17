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
        if (inputHTMLObj.inputMark) {
            inputHTMLObj.inputMark.addEventListener("change", () => {
                inputHTMLObj.inputMark.style.color = inputHTMLObj.inputMark.options[inputHTMLObj.inputMark.options.selectedIndex].style.color
            })
        }
        //* for edit
        if (index || index === 0) {
            if (inputHTMLObj.inputSelect && inputHTMLObj.inputName && inputHTMLObj.btnSubmit) {
                inputHTMLObj.inputName.value = inputArray[index].someName
                inputHTMLObj.inputSelect.selectedIndex = inputArray[index].someSelect
                if (newParent.name === 'Task') {
                    currentArray = todayArr
                    // //* check child mutation
                    // const config = {
                    //     childList: true,
                    // }
                    // const callback = function (mutationsList) {
                    //     for (let mutation of mutationsList) {
                    //         if (mutation.type === 'childList') {
                    //             inputHTMLObj.inputSelect.selectedIndex = inputHTMLObj.inputSelect.options.selectedIndex
                    //         }
                    //     }
                    // }
                    // const observer = new MutationObserver(callback)
                    // observer.observe(inputHTMLObj.inputSelect, config)
                    // //**********************/
                    inputHTMLObj.inputMark.selectedIndex = inputArray[index].someMark
                    inputHTMLObj.inputMark.style.color = colorsMarks[marksArr[inputArray[index].someMark].someSelect]

                    inputHTMLObj.inputSelect.style.color = inputArray[index].someSelect
                        ? colorsProjects[projectsArr[inputArray[index].someSelect].someSelect]
                        : "#fff"
                    inputHTMLObj.btnSubmit.innerHTML = `
                        <button onclick="${newParent.name}.edit(currentArray,${index})">Save</button>`
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
                    <button onclick="${newParent.name}.edit(currentArray,${index})">
                        <i class="fa fa-pencil"></i>
                        </button>`
                }

            }
            if (inputHTMLObj.description) {
                inputHTMLObj.description.value = inputArray[index].someDescription
            }
        }
        //* for add
        else {
            if (newParent.name === 'Task') {
                currentArray = todayArr
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(currentArray)">Add</button>`
            }
            if (newParent.name === 'Project' || newParent.name === 'Mark') {
                if (newParent.name === 'Project') {
                    currentArray = projectsArr
                }
                if (newParent.name === 'Mark') {
                    currentArray = marksArr
                }
                inputHTMLObj.btnSubmit.innerHTML = `
                <button onclick="${newParent.name}.add(currentArray)">
                <i class="fa fa-check"></i>
                </button>`
            }
        }
    }
}