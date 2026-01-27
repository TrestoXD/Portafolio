

oncontextmenu = (e) => {
    let rightmenudiv = document.getElementById("contextmenu");
    if(rightmenudiv === null){
        e.preventDefault();
        //let menu = document.createElement("div")
        //menu.id = "contextmenu"
        //menu.style = `top:${e.pageY-10}px; left:${e.pageX-40}px`
        //if(menu.parentNode){
        //    menu.parentNode.removeChild(menu);
        //}
        //menu.onmouseleave = () => contextmenu.outerHTML = '', onmenu = false;
        //menu.innerHTML = `
        //    <button>Arrange Icons</Button>
        //    <Button>Line Up Icons</Button> <hr></hr> 
        //    <button class="disabled">Paste</button>
        //    <button class="disabled">Paste Shortcut</button>
        //    <button>Undo Delete</button> <hr></hr> 
        //    <button>New</button> <hr></hr> 
        //    <button onclick='ErrorMenu("An err
        // or message to annoy you.", "Context menu Failed")' class='textbutt'>Properties</button>`
        //document.body.appendChild(menu)

        let x = e.pageX
        let y = e.pageY

        console.log('la x es:'+ x)

        ContextmenuExe(x +'px', y +'px', false, true, `
        <button>Arrange Icons</Button>
        <Button>Line Up Icons</Button> <hr></hr> 
        <button class="disabled">Paste</button>
        <button class="disabled">Paste Shortcut</button>
        <button>Undo Delete</button> <hr></hr> 
        <button>New</button> <hr></hr> 
        <button onclick='ErrorMenu("An error message to annoy you.", "Context menu Failed")' class='textbutt'>Properties</button>
        `);
    }
}