let debug = true;
var windowmanager = localStorage.getItem('windowmanager')

window.onload = function(){
    if(debug == true || !localStorage.getItem('visited')){
        console.log("first Time")
        
        WellcomeExe();
        localStorage.setItem('visited', true);
    }
    localStorage.setItem("totalsoft", 0)
}


function WellcomeExe(){
    WindowExe(500, 280, false,`        
        <div class="WContent" style="padding-left:20px; padding-right:20px; margin-top: 25px;"> 
            <h1>Bienvenido a mi Portafolio</h1>
            <div class="Wsided-left"> 
                <div class="WNotes" style="margin-top: 25px; margin-right:10px; width:300px; height:100px"> 
                    <div><img src="./Styles/icons/Welcome_Fact_95.svg" style="width: 50px"></div> 
                    <div style="padding-top:20px"> <b>Sabías que...</b> <p id="welcomefact">Texto...</p> </div>      
                </div>
                <div style="margin-top: 25px; margin-right:10px;">
                    <button class="button" style="padding:4px; width:100px"> Cerrar </button>
                </div>
            </div>
            <div> 
                <div style="display:flex; width:400px; align-items: center;"> 
                    <label class="input">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <p>Muestra esta pestaña cada vez que abres el Portafolio</p>
                </div>
            </div>    
        </div>`
    );
    RandomFact();
    localStorage.setItem("totalsoft", localStorage.getItem("totalsoft")+1);
    AddWindowManager();
}

function RandomFact(){
    let generatedFact = "";
    let generatedNum = 0;

    let Facts = ['El fuego quema','Un rayo cósmico NO fue el causante del glitch en un speedrun de Mario 64','Las zapatillas se ponen en los pies','Cuando construyeron las pirámides de Egipto aún existían los mamuts', ''];

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
        script.src = "./Scripts/WindowManager.js";

        document.getElementById("Process").appendChild(script);

        localStorage.setItem('windowmanager', 1);
    }
    else{
        localStorage.setItem('windowmanager', 0);
    }
}