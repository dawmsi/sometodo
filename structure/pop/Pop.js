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
    <p class="accepterQuestion">Do you really wanna do this?</p>
    <div class="btnWrapper">
    <button class="btnAccept" onclick="${someFunction.name}()">YES</button>
    <button class="btnDeny" onclick="Pop.togglePop()">NO</button></div>
    </div>`

}
