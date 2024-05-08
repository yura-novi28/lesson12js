function addImages(){
    event.target.style.background = "url(" + prompt() + ")"
}

document.querySelectorAll('.box')[0].addEventListener('click', addImages)
document.querySelectorAll('.box')[1].addEventListener('click', addImages)
document.querySelectorAll('.box')[2].addEventListener('click', addImages)


