function WindowExe(title, width, height, img ,maximizable, ontop, content){
    let icon;

    //TotalWindows
    localStorage.setItem("totalsoft", parseInt(localStorage.getItem('totalsoft'))+1)
    console.log("LocalStorage-windowexe:",localStorage.getItem("totalsoft"));

    //Window
    const mainDiv = document.createElement("win" + localStorage.getItem("totalsoft"));

    mainDiv.classList.add("Window")
    mainDiv.id = "Window"
    mainDiv.style.width = width + 'px';
    mainDiv.style.height= height + 'px';
    mainDiv.style.right = (window.innerWidth / 3) + 'px';
    mainDiv.style.bottom = (window.innerHeight / 3) + 'px';


    if( img == null){
        icon = null;
    }else{
        icon = './Styles/AppIcons/'+img+'.png';
        console.log(icon)
    }

    if(ontop == true){
        mainDiv.style.zIndex = 999999;
    } else{
        mainDiv.style.zIndex = 1;
    }

    if(maximizable == true){
        if(icon == null){
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="WTop-Bar"> 
                <div><p>${title}</p> </div> 
                <div> 
                    <button > <img src="./Styles/icons/minimize.svg" style="transform: translate(-50%, 50%);"> </button> 
                    <button> <img src="./Styles/icons/maximize.svg"> </button>
                    <button style="margin-left:2px" onclick="closeWindow()"> <img src="./Styles/icons/close.svg"> </button>
                </div>   
            </div>` + content;
        }else{
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="WTop-Bar"> 
                <div> <img src="${icon}" class="icon"> <p>${title}</p> </div> 
                <div> 
                    <button > <img src="./Styles/icons/minimize.svg" style="transform: translate(-50%, 50%);"> </button> 
                    <button> <img src="./Styles/icons/maximize.svg"> </button>
                    <button style="margin-left:2px" onclick="closeWindow()"> <img src="./Styles/icons/close.svg"> </button>
                </div>   
            </div>` + content;
        }
    } else{
        if(icon == null){
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="WTop-Bar"> 
                <div> <p>${title}</p> </div> 
                <div> 
                    <button style="margin-left:2px" onclick="closeWindow()"> <img src="./Styles/icons/close.svg"> </button>
                </div>   
            </div>` + content;
        }else{
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="WTop-Bar"> 
                <div> <img src="${icon}"> <p>${title}</p> </div> 
                <div> 
                    <button style="margin-left:2px" onclick="closeWindow()"> <img src="./Styles/icons/close.svg"> </button>
                </div>   
            </div>` + content;
        }
    }

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(mainDiv, currentDiv);
    //App in Taskbar

    const currentTaskbar = document.getElementById("Apps");
    const mainButton = document.createElement("button");

    mainButton.classList.add('taskbar-button');
    if(icon == null){
        mainButton.innerHTML = `<p>${title}</p>`
    }else{
        mainButton.innerHTML = `<img src="${icon}"> <p>${title}</p>`
    }
    currentTaskbar.insertAdjacentElement('beforeend', mainButton)
}