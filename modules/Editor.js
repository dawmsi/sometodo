class Editor {
    static resetEditor(
        wrapperEditor,
        btnShowEditor,
    ) {
        wrapperEditor.classList.toggle('showEditor')
        wrapperEditor.getElementsByTagName('form')[0].reset()
        if (btnShowEditor) {
            btnShowEditor.classList.toggle('cencelBtn')
        }
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
            wrapperEditor,
            btnShowEditor
        )
        if (index || index === 0) {
            inputName.value = item.parentNode.getElementsByTagName('a')[0].text
            inputColor.options.selectedIndex = item.getElementsByTagName('i')[0].id
            inputColor.style.color = item.getElementsByTagName('i')[0].style.color
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

    static showTaskEditor(
        wrapperEditor,
        btnSubmit,
        inputName,
        description = '',
        index,
        item
    ) {
        this.resetEditor(wrapperEditor)
        if (index || index === 0) {
            console.log(item.parentNode.parentNode)
            inputName.value = item.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[0].childNodes[0].textContent
            if (description) {
                description.value = item.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[0].textContent
            }
            btnSubmit.innerHTML = `
                <button onclick="Task.edit(${index})">Save</button>
                `
        } else {
            btnSubmit.innerHTML = `
                <button onclick="Task.add(tasksArr)">Add</button>
                `
        }
    }
}