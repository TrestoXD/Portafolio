

function CmdEXE(){
    WindowExe('COMMAND PROMPT', 400, 200, null, true, true, `
    <div class="Command-prompt"> 
    
    <p>Vito Minaya González CC0 1.0 Universal</p>
    
    <span> C : \ Verse > </span><input type="text" id="inputcommand"> 
    
    </div>
        `)
    document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);
}

function CMDINPUT(e){
    if(e.keycode === 13 || e.key === 'Enter'){
        console.log("enter pressed");

        //Comandos!
    } 
}
