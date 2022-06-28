
let parent = document.querySelector("#pop-area .container")

function togglePop() {
    parent.parentElement.classList.toggle("hiding")
    parent.parentElement.classList.contains("hiding")
        ? (parent.style.visibility = "hidden")
        : (parent.style.visibility = "visible")
}

let renderNewPop = new Function(`par`, `
    togglePop()
    if (!parent.childNodes[1]) {
        let temp = document.createElement(par[0])
        temp.classList.add(par[1])
        temp.innerHTML = par[2]
        parent.prepend(temp)
    }
`)

