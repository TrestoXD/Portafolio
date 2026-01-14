
var totalsoft = localStorage.getItem("totalsoft");

console.log("Window Manager Running")

let Header = document.getElementById('WTop-Bar');
let Windows = document.getElementById('Window');
let offsetX, offsetY;

Header.addEventListener('mousedown', startDragging);
Header.addEventListener('mouseup', stopDragging);

function startDragging(e){
    e.preventDefault();
    offsetX = e.clientX - Header.getBoundingClientRect().left;
    offsetY = e.clientY - Header.getBoundingClientRect().top;
    Header.addEventListener('mousemove', dragElement);
}

function dragElement(e){
    e.preventDefault();
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    Windows.style.left = x + 'px';
    Windows.style.top = y + 'px';
}

function stopDragging(){
    document.removeEventListener('mousemove', Header);
}