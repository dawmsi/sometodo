
let parent

function togglePop() {
    parent = document.querySelector("#pop-area .container")
    parent.parentElement.classList.toggle("hiding")
    parent.parentElement.classList.contains("hiding")
        ? (parent.style.visibility = "hidden")
        : (parent.style.visibility = "visible")
}

function renderNewPop(content) {
    togglePop()
    parent.innerHTML = content
}

