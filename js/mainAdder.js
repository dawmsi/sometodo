const addLink = document.querySelector('.line-area')

addLink.addEventListener('click', showAdder)

function showAdder(){
    document.querySelector('#adding').style.display = 'block'
}


function cancel(){
    document.querySelector('#cancel')
    .parentElement
    .parentElement
    .style.display = "none";
    document.querySelector('.add-link').style.color = "#db4c3f";
    document.querySelector('#formMainAdd').reset();
}