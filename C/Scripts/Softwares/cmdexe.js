

function CmdEXE(){
    WindowExe('COMMAND PROMPT', 400, 200, 'ms_dos-1', true, true, `
    <div class="Command-prompt" id="Commandprompt"> 
    
    <p>Vito Minaya González CC0 1.0 Universal</p>
    
    <span> C : \ Verse > </span><input type="text" id="inputcommand"> 
    
    </div>
        `)
    document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);
}

function CMDINPUT(e){
    let CMDOUTPUT = document.getElementById("Commandprompt");

    if(e.keycode === 13 || e.key === 'Enter'){

        let result = document.createElement("div")

        console.log(document.getElementById('inputcommand').value);

        //Comandos!
        if(document.getElementById('inputcommand').value == ""){
            result.innerHTML = `<span> C : \ Verse > </span><input type="text" id="inputcommand">`
            document.getElementById('inputcommand').outerHTML = '';
        }else{
            result.innerHTML = `
            <p> ${document.getElementById('inputcommand').value} is not recognized has an internal or external command. </p>
            <span> C : \ Verse > </span><input type="text" id="inputcommand">`

            document.getElementById('inputcommand').outerHTML = '';
        }

        CMDOUTPUT.appendChild(result)
        document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);
    } 
}
