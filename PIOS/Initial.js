let debugmode = false;
const time = 10;

document.body.addEventListener('keypress', BootPress);
const sel = document.getElementById("select")

sel.addEventListener('change',function(e){
    let value = sel.options[sel.options.selectedIndex].value;
    console.log("The value is: "+ value)    
});

if(debugmode == false){
    console.log("Initiating Countdown...");
    ChangeTimer();
    setTimeout(StartBoot, (10 * 1000));
}

function ChangeTimer(){
    for (let i = 1; i < time; i++) {
        setTimeout(() => document.getElementById("countdown-text").innerText = i + "s", 1000);   
    }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function StartBoot(){
    console.log("BootScreen initiated")
    window.open("./C/Startmenu.html", "_self")
}

function BootPress(e){
    if(e.keycode === 13 || e.key === 'Enter'){
        let value = sel.options[sel.options.selectedIndex].value;
        if(value == 1){
            console.log("BootScreen initiated")
            window.open("./C/Startmenu.html", "_self")            
        }else{
            alert("This OS is not prepared...")
        }
    }
}