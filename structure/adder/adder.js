
function showAdder(){
    document.querySelector('#adding').style.display = 'block'
}


function add(){
    Task.addTask()
    document.querySelector('#formAdd').reset()
}

function cancel(){
    document.querySelector('#cancel')
    .parentElement
    .parentElement
    .style.display = "none";
    document.querySelector('#formAdd').reser();
}