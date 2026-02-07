

function CmdEXE(){
    WindowExe('COMMAND PROMPT', 400, 200, 'ms_dos-1', true, true, `
    <div class="Command-prompt" id="Commandprompt" onclick="document.getElementById('inputcommand').focus()"> 
    
    <p>Vito Minaya González CC0 1.0 Universal</p>
    
    <span> C : \ Verse > </span><input type="text" id="inputcommand" autocomplete="off"> 
    
    </div>
        `)
    document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);
    document.getElementById('inputcommand').focus();
}

function CMDINPUT(e){
    let CMDOUTPUT = document.getElementById("Commandprompt");

    if(e.keycode === 13 || e.key === 'Enter'){

        let result = document.createElement("div")

        commandValue = document.getElementById('inputcommand').value;

        console.log(commandValue);

        let newPrompt = document.createElement("div");

        //Comandos!
        if(commandValue == ""){
            result.innerHTML = `<span> C : \ Verse > </span><input type="text" id="inputcommand">`
            document.getElementById('inputcommand').outerHTML = '';
        }else{
            result.innerHTML = `
            <p> ${commandValue} is not recognized as an internal or external command. </p>`

            newPrompt.innerHTML = `<span> C : \ Verse > </span><input type="text" id="inputcommand">`
            document.getElementById('inputcommand').outerHTML = `<span>${commandValue}</span>`; 
        }

        CMDOUTPUT.appendChild(result)
        CMDOUTPUT.appendChild(newPrompt)
        document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);

        document.getElementById('inputcommand').focus();
    } 
}
