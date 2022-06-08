const aside = document.querySelector('#aside')
const eye = document.querySelector('#eye')

function hideshow(){
    aside.classList.toggle('hiden')
    if(aside.classList.contains('hiden')){
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    }
    else {
    eye.classList.remove('fa-eye')
    eye.classList.add('fa-eye-slash')
}}