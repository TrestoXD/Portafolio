function WindowExe(width, height, maximizable, content){
    const mainDiv = document.createElement("div");

    mainDiv.classList.add("Window")
    mainDiv.id = "Window"
    mainDiv.style.width = width + 'px';
    mainDiv.style.height= height + 'px';
    if(maximizable == true){
        mainDiv.innerHTML = `        
        <div class="WTop-Bar" id="WTop-Bar"> 
            <div> <p>Bienvenido</p> </div> 
            <div> 
                <button > <img src="./Styles/icons/minimize.svg" style="transform: translate(-50%, 50%);"> </button> 
                <button> <img src="./Styles/icons/maximize.svg"> </button>
                <button style="margin-left:2px"> <img src="./Styles/icons/close.svg"> </button>
            </div>   
        </div>` + content;
    } else{
        mainDiv.innerHTML = `        
        <div class="WTop-Bar" id="WTop-Bar"> 
            <div> <p>Bienvenido</p> </div> 
            <div> 
                <button style="margin-left:2px"> <img src="./Styles/icons/close.svg"> </button>
            </div>   
        </div>` + content;
    }

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(mainDiv, currentDiv);
}