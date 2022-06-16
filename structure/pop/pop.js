
function togglePop(){
    let pop = document.querySelector('#pop-adding')
        pop.classList.toggle("hiding")
        pop.classList.contains("hiding") 
        ? pop.style.visibility = 'hidden' 
        : pop.style.visibility = 'visible';
        document.querySelector('#popForm').reset()
}
