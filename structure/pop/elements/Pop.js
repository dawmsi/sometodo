class Pop {
    static parent = document.querySelector("#pop-area .container")

    static togglePop() {
        parent = document.querySelector("#pop-area .container")
        parent.parentElement.classList.toggle("hiding")
        parent.parentElement.classList.contains("hiding")
            ? (parent.style.visibility = "hidden")
            : (parent.style.visibility = "visible")
    }

    static renderNewPop(content) {
        Pop.togglePop()
        parent.innerHTML = content
    }

}
