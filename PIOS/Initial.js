let debugmode = false;

if(debugmode == false){
    console.log("Initiating Countdown...");
    ChangeTimer();
    setTimeout(StartBoot, 5000);
}

function ChangeTimer(){
    setTimeout(() => document.getElementById("countdown-text").innerText = 3 + "s", 1000);

    setTimeout(() => document.getElementById("countdown-text").innerText = 3 + "s", 2000);

    setTimeout(() => document.getElementById("countdown-text").innerText = 2 + "s", 3000);

    setTimeout(() => document.getElementById("countdown-text").innerText = 1 + "s", 4000);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function StartBoot(){
    console.log("BootScreen initiated")
    window.open("./C/Startmenu.html", "_self")
}