console.log("Window Manager Running")
let i = 1;

const ClickSound = new Audio("");

//function Recharge(){
//    Header = document.getElementById('WTop-Bar' + localStorage.getItem("totalsoft")).addEventListener('mousedown', mouseDownHeader);;
//    console.log("Recharged")
//}
let startX = 0, startY = 0, newX = 0, newY = 0;

document.addEventListener('mouseup', mouseUp);
document.addEventListener('mousedown', mouseDown);

let idee = 0

function mouseDown(e){
        console.log("Mousedown")
        if(e.target.id == "minmenu" | e.target.id == "minmenus" | e.target.id == "secmenu") {
            console.log("en context")
        
        }else if(e.target.classList.contains("WTop-Bar")){
            idee = e.target.id 
            mouseDownHeader(e);
        }
        //else{
        //    try {
        //        document.getElementById("minmenu").outerHTML = ''   
        //        document.getElementById("secmenu").outerHTML = ''   
        //    } catch (error) {
        //        console.log("no contextmenu exists")
        //    }
        //}
        //ClickSound.play();
}

function mouseDownHeader(e){
    console.log("El id és: "+ idee)
    currentclick = e.target.id;
    console.log('elcurrentclick es: ' + currentclick)
    Windows = document.getElementById('win' + idee)

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
    console.log(e.target.id);
    
    localStorage.setItem('currentclick', e.target.id);
}

function closeWindow(ides){
    console.log(`cerrando... ` + ides)
    document.getElementById('win'+ ides).outerHTML = ' ';
    document.getElementById('btt'+ides).outerHTML = ' ';
}

