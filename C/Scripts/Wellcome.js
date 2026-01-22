let debug = true;
var windowmanager = localStorage.getItem('windowmanager')

window.onload = function(){
    localStorage.setItem('totalsoft', 0)
    console.log("LocalStorage:",localStorage.getItem("totalsoft"));

    if(debug == true || localStorage.getItem('visited', false)){
        console.log("first Time")
        
        WellcomeExe();
        localStorage.setItem('visited', true);
    }
}

function WellcomeExe(){
    WindowExe('Bienvenido',500, 280, null ,false, false,`        
        <div class="WContent" style="padding-left:20px; padding-right:20px; margin-top: 25px;"> 
            <h1>Bienvenido a mi Portafolio</h1>
            <div class="Wsided-left"> 
                <div class="WNotes" style="margin-top: 25px; margin-right:10px; width:300px; height:100px"> 
                    <div><img src="./Styles/icons/Welcome_Fact_95.svg" style="width: 50px"></div> 
                    <div style="padding-top:20px"> <b>Sabías que...</b> <p id="welcomefact">Texto...</p> </div>      
                </div>
                <div style="margin-top: 25px; margin-right:10px;">
                    <button class="button" style="padding:4px; width:100px; margin-bottom:8px" onclick=RandomFact()> Rotar Fact </button>
                </div>
            </div>
            <div class="Wsided-left"> 
                <div style="display:flex; width:372px; align-items: center;"> 
                    <label class="input" style="margin-top:10px">
                        <input type="checkbox">
                        <img class="Checkmark" src="./Styles/icons/checkmark-disabled.svg"></img>
                    </label>
                    <p style="margin-top:16px">Muestra esta pestaña cada vez que abres el Portafolio</p>
                </div>
                <div>
                    <button class="button" style="padding:4px; width:100px; margin-top:8px"> Cerrar </button>
                </div>
            </div>    
        </div>`
    );
    RandomFact();
    localStorage.setItem("totalsoft", localStorage.getItem("totalsoft")+1);
    AddWindowManager();
}


function SetupExe(){
    WindowExe('Tresto Setup', 500, 120, null, false, `
        <div style="display:flex; ">
        <div> <img src="./Styles/icons/Warning.png" style="width:100px"> </div>
        <div> 
            <p> Setup has finished configuring the channel </p>
            <p> You must upload a  new video before the new settings will take effect.</p>
        </div>
        </div>`
    );

    localStorage.setItem("totalsoft", localStorage.getItem("totalsoft")+1);
}

function RandomFact(){
    let generatedFact = "";
    let generatedNum = 0;

    let Facts = ['El fuego quema','Un rayo cósmico NO fue el causante del glitch en un speedrun de Mario 64','Las zapatillas se ponen en los pies','Cuando construyeron las pirámides de Egipto aún existían los mamuts', 'Sabias que las gallinas pueden mantener su cabeza en un punto fijo?', 'Sabías que Cleopatra se lleva casi el mismo tiempo con la construcción de las pirámides que nosotros con ella?', 'sabias que las unicas partes del cuerpo que siguen creciendo son la nariz i las orejas'];

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