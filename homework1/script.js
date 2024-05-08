let count = 0;
function colorBG(){
    count++;
    if(count == 1){
        document.querySelector('.box').style.backgroundColor = 'red';
    }
    else if(count == 2){
        document.querySelector('.box').style.backgroundColor = 'yellow';
    }
    else{
        count = 0;
        document.querySelector('.box').style.backgroundColor = 'green';
    }
}
function removeColorBG(){
    document.querySelector('.box').style.backgroundColor = 'blueviolet';
}

document.querySelector('.box').addEventListener('mouseover', colorBG);
document.querySelector('.box').addEventListener('mouseout', removeColorBG);
