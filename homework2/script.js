function clearBox(){
    document.querySelector('.box').style.backgroundColor = 'aqua';
    document.querySelector('.box').style.color = 'black';
    document.querySelector('.box').innerText = 'У мене є секрет!';
}

function moveBox(){
    document.querySelector('.box').style.backgroundColor = 'yellow';
    document.querySelector('.box').style.color = 'blue';
    document.querySelector('.box').innerText = 'Хочеш знати який';
}

function downBox(){
    document.querySelector('.box').style.backgroundColor = 'blue';
    document.querySelector('.box').style.color = 'yellow';
    document.querySelector('.box').innerText = 'А я тобі не скажу';
}

document.querySelector('.box').addEventListener('mousemove', moveBox)
document.querySelector('.box').addEventListener('mouseout', clearBox)
document.querySelector('.box').addEventListener('mousedown', downBox)
document.querySelector('.box').addEventListener('mouseup', moveBox)

