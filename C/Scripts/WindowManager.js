console.log("Window Manager Running")
let i = 1;

const ClickSound = new Audio("");

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
        }else if(e.target.classList.contains("taskbar-button")){
            console.log("en boton de la barra de tareas")
            deminimizeWindow(e.target.id.replace("btt", ""))
        }
        else{
            console.log(e.target)
            try {
                document.getElementById("minmenu").outerHTML = ''   
                //document.getElementById("secmenu").outerHTML = ''   
            } catch (error) {
                console.log("no contextmenu exists")
            }
        }
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
    //Con el movimiento del mouse, se actualiza la posición de la ventana
    e.preventDefault();

    newX = e.clientX - startX;
    newY = e.clientY - startY;

    Windows.style.top = (newY) + 'px';
    Windows.style.left = (newX) + 'px';
}

function mouseUp(e){
    //Cancela el movimiento de la ventana al soltar el mouse
    document.removeEventListener('mousemove', mouseMove);
}

function minimizeWindow(ides){
    //minimiza la ventana
    document.getElementById('win'+ ides).style.visibility = 'hidden';
}

function maximizeWindow(ides){
    //maximiza la ventana
    document.getElementById('win'+ ides).style.width = window.innerWidth + 'px';
    document.getElementById('win'+ ides).style.height = window.innerHeight + 'px';
    document.getElementById('win'+ ides).style.top = '0px';
    document.getElementById('win'+ ides).style.left = '0px';
}

function deminimizeWindow(ides){
    //desminimiza la ventana al hacer click en el botón de la barra de tareas
    console.log("Deminimizar ventana " + ides)
    document.getElementById('win'+ ides).style.visibility = 'visible';
}

// Cerrar ventana
function closeWindow(ides){
    //elimina la ventana y el botón de la barra de tareas
    document.getElementById('win'+ ides).outerHTML = ' ';
    document.getElementById('btt'+ides).outerHTML = ' ';
}

