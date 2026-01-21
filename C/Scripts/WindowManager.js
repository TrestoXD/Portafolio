console.log("Window Manager Running")

let Header = document.getElementById('WTop-Bar');
let Windows = document.getElementById('Window');
let startX = 0, startY = 0, newX = 0, newY = 0;

Header.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
document.addEventListener('mousedown', currentWindow);

function mouseDown(e){
    e.preventDefault();
    
    startX = e.clientX - Windows.getBoundingClientRect().left;
    startY = e.clientY - Windows.getBoundingClientRect().top;

    console.log("StartX", startX);
    console.log("StartY", startY);

    document.addEventListener('mousemove', mouseMove);
}

function mouseMove(e){
    e.preventDefault();

    newX = e.clientX - startX;
    newY = e.clientY - startY;

    Windows.style.top = (newY) + 'px';
    Windows.style.left = (newX) + 'px';
}

function mouseUp(e){
    console.log("MouseUp")
    document.removeEventListener('mousemove', mouseMove);
}

function currentWindow(e){
    console.log(e.target);
}


function closeWindow(){
    console.log("cerrando...");


}