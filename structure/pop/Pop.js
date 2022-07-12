class Pop {
    static parent = document.querySelector("#pop-area .container")

    static togglePop() {
        parent = document.querySelector("#pop-area .container")
        parent.parentElement.classList.toggle("hiding")
        parent.parentElement.classList.contains("hiding")
            ? (parent.style.visibility = "hidden")
            : (parent.style.visibility = "visible")
    }

    static renderNewPop(content, someFunction) {
        Pop.togglePop()
        parent.innerHTML = content(someFunction)
    }

    static popAccepter = (someFunction) => `
    <div class="accepterWrapper">
    <h2>Do you really wanna do this?</h2>
    <div class="btnWrapper">
    <button class="btnAccept" onclick="${someFunction.name}()">YES</button>
    <button class="btnDeny" onclick="Pop.togglePop()">NO</button></div>
    </div>`

}
