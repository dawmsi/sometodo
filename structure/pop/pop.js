
let parent = document.querySelector("#pop-area .container")

function togglePop() {
    parent.parentElement.classList.toggle("hiding")
    parent.parentElement.classList.contains("hiding")
        ? (parent.style.visibility = "hidden")
        : (parent.style.visibility = "visible")
}

function renderNewPop(PopIncome) {
    togglePop()
    if (!parent.childNodes[1]) {
        const editor = document.createElement(PopIncome[0])
        editor.classList.add(PopIncome[1])
        editor.innerHTML = PopIncome[2]
        parent.prepend(editor)
    }
}

