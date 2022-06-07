const addLink = document.querySelector('#addBtn')

addLink.addEventListener('click', showAdder)

function showAdder(){
    document.querySelector('#adding').style.display = 'block'
}


function cancel(){
    document.querySelector('#cancel')
    .parentElement
    .parentElement
    .style.display = "none";
    document.querySelector('#formMainAdd').reset()
}