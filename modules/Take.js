class Take {
    static elDOMfrom = (idsObj) => {
        for (let key in idsObj)
            idsObj[key] = document.querySelector(idsObj[key])
        return idsObj
    }

    static colorsFrom = (someID) => {
        let colors = []
        for (let index = 0; index < someID.length; index++) {
            colors.push(someID[index].style.color)
        }
        return colors
    }

}