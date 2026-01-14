let debug = true;
var windowmanager = localStorage.getItem('windowmanager')

window.onload = function(){
    if(debug == true || !localStorage.getItem('visited')){
        console.log("first Time")
        
        WellcomeExe();
        localStorage.setItem('visited', true);
    }
}


function WellcomeExe(){

    const mainDiv = document.createElement("div");

    mainDiv.classList.add("Window")
    mainDiv.id = "Window"
    mainDiv.style.width = '500px';
    mainDiv.style.height= '250px';
    mainDiv.innerHTML = `
    <!-- THE MAIN TOP BAR -->
        <div class="WTop-Bar" id="WTop-Bar"> 
            <div> <p>Bienvenido</p> </div> 
            <div> 
                <!--<button > <img src="./Styles/icons/minimize.svg" style="transform: translate(-50%, 50%);"> </button> 
                <button> <img src="./Styles/icons/maximize.svg"> </button> -->
                <button style="margin-left:2px"> <img src="./Styles/icons/close.svg"> </button>
            </div>   
        </div>

        <div class="WContent" style="padding-left:20px; padding-right:20px; margin-top: 25px;"> 
            <h1>Bienvenido a mi Portafolio</h1> 
            <div class="WNotes" style="margin-top: 25px; margin-right:40px"> 
                <div><img></div> 
                <div> <b>Sabías que...</b> <p id="welcomefact">Texto...</p> </div>      
            </div> 
            <div>    </div>    
        </div>
    `

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(mainDiv, currentDiv);

    RandomFact();
    AddWindowManager();
}

function RandomFact(){
    let generatedFact = "";
    let generatedNum = 0;

    let Facts = ['El fuego quema','Un rayo cósmico NO fue el causante del glitch en un speedrun de Mario 64','Las zapatillas se ponen en los pies','Cuando construyeron las pirámides de Egipto aún existían los mamuts'];

    function getRandomInt(min,max){
        const mincel = Math.ceil(min);
        const maxflor = Math.floor(max);
        return Math.floor(Math.random() * (maxflor - mincel) + mincel);
    }

    generatedNum = getRandomInt(0,Facts.length);

    generatedFact = Facts[generatedNum];

    console.log(generatedNum)
    console.log(generatedFact)

    document.getElementById("welcomefact").innerText = generatedFact;
}

console.log(windowmanager)

function AddWindowManager(){
    if(windowmanager == null || windowmanager >= 0){
        const script = document.createElement('script');
        script.src = "./Scripts/windows.js";

        document.getElementById("Process").appendChild(script);

        localStorage.setItem('windowmanager', 1);
    }
    else{
        localStorage.setItem('windowmanager', 0);
    }
}